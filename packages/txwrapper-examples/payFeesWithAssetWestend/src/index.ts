import '@polkadot/api-augment';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import {
	rpcToLocalNode, signWith
} from '../../common/util';
import {
	construct,
	deriveAddress,
	getRegistry,
	methods,
	PolkadotSS58Format,
} from '@substrate/txwrapper-polkadot';
/**
 * Node endpoints to whcich we will connect.
 * These endpoints are set on zombienet via the config.toml file.
*/
const WESTEND_ALICE_WS_URL = 'ws://127.0.0.1:9900';
const WESTMINT_WS_URL = 'ws://127.0.0.1:9910';

const main = async () => {
	await cryptoWaitReady();

	const keyring = new Keyring({ type: 'sr25519' });
	const alice = keyring.addFromUri('//Alice', { name: 'Alice' });
	const bob = keyring.addFromUri('//Bob', { name: 'Bob' });

	const westmintApi = await ApiPromise.create({
		provider: new WsProvider(WESTMINT_WS_URL),
		noInitWarn: true,
	});

	await westmintApi.isReady;

	const westendApi = await ApiPromise.create({
		provider: new WsProvider(WESTEND_ALICE_WS_URL),
		noInitWarn: true,
	});

	await westendApi.isReady;
	/**
		 * Now we create the main tx, a simple transfer of the native asset,
		 * and sign it using data we fetch through RPCs to the local parachain node,
		 * but we don't send it yet.
		 */
	let blockHash = await rpcToLocalNode('chain_getBlockHash');
	let genesisHash = await rpcToLocalNode('chain_getBlockHash', [0]);
	let nonce = await rpcToLocalNode('account_nextIndex', [alice.address]);
	const runtimeVersion = await rpcToLocalNode(
		'state_getRuntimeVersion'
	);
	const assetTransfer = westmintApi.tx.balances.transferKeepAlive(
		bob.address,
		Number(1000000000000))
		.sign(alice, {
			blockHash: blockHash,
			genesisHash: genesisHash,
			nonce: nonce,
			runtimeVersion: runtimeVersion
		});

	/**
	 * Here we use the previous call hex encoded to create an Extrinsic type.
	 */
	const nativeTransferCall = westmintApi.createType('Extrinsic',
		assetTransfer.toHex()
	);

	/**
	 * Now we use the previously created extrinsic to estimate the fees. This is
	 * just an estimation, and may differ from the fees of the actual tx. First
	 * we call transactionPaymentApi.queryInfo() to get the tx details, and from
	 * that we extract the estimated fees.
	 */
	const txInfo = await westmintApi.call.transactionPaymentApi.queryInfo(
		nativeTransferCall,
		nativeTransferCall.encodedLength);

	const fees = txInfo.partialFee.toHuman();
	console.log("Fees", fees);

	/**
	 * Up until now, we have been using Polkadot-js to set up the scenario for
	 * this example.
	 * 
	 * But from now on we will use txwrapper to recreate an offline environment
	 * for the main goal of this example, which is using a non-native asset to
	 * pay for the fees of the tx. Here we will use the asset we created at the
	 * beginning.
	 */
	const { block } = await rpcToLocalNode('chain_getBlock');
	const metadataRpc = await rpcToLocalNode('state_getMetadata');
	const { specVersion, transactionVersion, specName } = await rpcToLocalNode(
		'state_getRuntimeVersion'
	);
	blockHash = await rpcToLocalNode('chain_getBlockHash');
	genesisHash = await rpcToLocalNode('chain_getBlockHash', [0]);
	nonce = await rpcToLocalNode('account_nextIndex', [alice.address]);

	/**
	 * Create Polkadot's type registry.
	 *
	 * When creating a type registry, it accepts a `asCallsOnlyArg` option which
	 * defaults to false. When true this will minimize the size of the metadata
	 * to only include the calls. This removes storage, events, etc.
	 * This will ultimately decrease the size of the metadata stored in the registry.
	 */
	const registry = getRegistry({
		specName,
		chainName: 'Westend',
		specVersion,
		metadataRpc,
	});

	/**
	 * Now we create our transferKeepAlive unsigned tx.
	 * First we create the tx itself and then we use it to create our
	 * signingPayload.
	 */
	const unsigned = methods.balances.transferKeepAlive(
		{
			value: '1000000000000',
			dest: { id: bob.address }, // Bob
		},
		{
			address: deriveAddress(alice.publicKey, PolkadotSS58Format.polkadot),
			blockHash,
			blockNumber: registry
				.createType('BlockNumber', block.header.number)
				.toNumber(),
			eraPeriod: 64,
			genesisHash,
			metadataRpc,
			nonce,
			specVersion,
			tip: 0,
			transactionVersion,
		},
		{
			metadataRpc,
			registry,
		}
	);
	const signingPayload = construct.signingPayload(unsigned, { registry });

	/**
	 * With our payload ready, we create the signature with the provided helper 
	 * and then the signed tx.
	 */
	const signature = signWith(alice, signingPayload, {
		metadataRpc,
		registry
	})
	/**
	 * Now we construct the signed tx, using the unsigned tx, the signature and 
	 * the provided helper function.
	 */
	const tx = construct.signedTx(unsigned, signature, {
		metadataRpc,
		registry,
	});

	/**
	 * Now we submit the tx via an RPC and await its resolution.
	 */
	const actualTxHash = await rpcToLocalNode('author_submitExtrinsic', [tx]);
	console.log(`Actual Tx Hash: ${actualTxHash}`);

	/**
	 * Finally we listen to the evnts to check when the asset tx fee is paid.
	 */
	westmintApi.query.system.events((events) => {
		console.log(`\nReceived ${events.length} events:`);
		events.filter(({ event }) =>
			westmintApi.events.assetTxPayment.AssetTxFeePaid.is(event)
		).forEach((record) => {
			const { event } = record;
			const types = event.typeDef;
			// Loop through each of the parameters, displaying the type and data
			event.data.forEach((data, index) => {
				console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
			});
		});
	});
};

main()
	.catch(console.error)
	.finally(() => process.exit());