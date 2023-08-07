import '@polkadot/api-augment';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/api';
import { DispatchError } from '@polkadot/types/interfaces';
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


const setup = async () => {
	await cryptoWaitReady();

	const keyring = new Keyring({ type: 'sr25519' });
	const alice = keyring.addFromUri('//Alice', { name: 'Alice' });

	/**
	 * Establish the metadata of the asset we want to create.
	 */
	const assetInfo = {
		assetId: 1,
		assetName: 'xUSD',
		assetSymbol: 'XUSD',
		assetDecimals: 12,
	};

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
	 * Create an xcm call via the relay chain because this is the chain in 
	 * which it will be called.
	 * NOTE: The relay chain will have sudo powers.
	 * 
	 * First we will create the tx forceCreate and use it to create a Call.
	 * 
	 * NOTE: We use the parachain api because that's where the call will be
	 * executed.
	 */

	const forceCreate = westmintApi.tx.assets.forceCreate(
		assetInfo.assetId,
		alice.address,
		true,
		1000
	);
	const forceCreateCall = westmintApi.createType('Call', {
		callIndex: forceCreate.callIndex,
		args: forceCreate.args,
	});

	/**
	 * Now we create soome parameters we will use to make the xcm call:
	 * 
	 * The XcmDoubleEncoded type to encode the call.
	 * 
	 * The XcmOriginKind type to set the origin of the xcm call. Here it is set 
	 * as parents:1 , interior:  { Here: '' } because we are sending the call 
	 * from an account on the Relay chain.
	 * 
	 * The xcmDest to tell the XCMP where the message is destined to, which we
	 * then turn into a MultiLocation.
	 * 
	 * The xcmMessage itself, setting first unpaidExecution so that it's not
	 * blocked by the xcm Barrier and then the transact order itself, which 
	 * contains the message with our call and the origin of the call. To know
	 * which barriers are set to block xcm messages, we have to check the 
	 * destination chain's xcmConfig.rs. The xcmMessage is indicated to be an
	 * XCM v3 message, which is important when creating the XcmVersionedXcm type.
	 */

	const xcmDoubleEncoded = westendApi.createType('XcmDoubleEncoded', {
		encoded: forceCreateCall.toHex(),
	});
	const xcmOriginType = westendApi.createType('XcmOriginKind', 'Superuser');
	const xcmDest = {
		V3: {
			parents: 0,
			interior: {
				X1: {
					parachain: 1000,
				},
			},
		},
	};
	const multiLocation = westendApi.createType(
		'XcmVersionedMultiLocation',
		xcmDest
	);
	const xcmMessage = {
		V3: [
			{
				unpaidExecution: {
					weightLimit: { Unlimited: '' },
					checkOrigin: {
						parents: 1,
						interior: { Here: '' },
					},
				},
			},
			{
				transact: {
					originKind: xcmOriginType,
					requireWeightAtMost: {
						refTime: 1000000000,
						proofSize: 900000,
					},
					call: xcmDoubleEncoded,
				},
			},
		],
	};
	const xcmVersionedMsg = westendApi.createType('XcmVersionedXcm', xcmMessage);
	/**
	 * Now we create the xcm transaction with the xcmPallet and the 
	 * multiLocation and xcmVersionedMsg, so that then we can create the xcm 
	 * call to send through the sudo pallet.
	 * 
	 * NOTE: We create the xcm call and its components through the relay chain
	 * api because that's where the message is originated. 
	 */
	const xcmMsg = westendApi.tx.xcmPallet.send(multiLocation, xcmVersionedMsg);
	const xcmCall = westendApi.createType('Call', {
		callIndex: xcmMsg.callIndex,
		args: xcmMsg.args,
	});

	/**
	 * We send the call through the sudo pallet and wait for its resolution.
	 */
	await westendApi.tx.sudo.sudo(xcmCall).signAndSend(alice, { nonce: -1 });

	/**
	 * Now we create the txs to create, mint and set the metadata of our custom
	 * asset, to then batch them and send them all together, creating the batch 
	 * of txs through utility.batchAll().
	 */
	let txs = [
		westmintApi.tx.assets.setMetadata(
			assetInfo.assetId,
			assetInfo.assetName,
			assetInfo.assetSymbol,
			assetInfo.assetDecimals
		),
		westmintApi.tx.assets.mint(
			assetInfo.assetId,
			alice.address,
			1000000 * 120000000
		),
	];
	let batch = westmintApi.tx.utility.batchAll(txs);

	/**
	 * Here we sign and send the batch and await its resolution, while we check 
	 * the status to see when it's included in a block or finalized and listen 
	 * for errors.
	 */
	await batch.signAndSend(alice, { nonce: -1 }, ({ status, events }) => {
		if (status.isInBlock || status.isFinalized) {
			events
				// find/filter for failed events
				.filter(({ event }) =>
					westmintApi.events.system.ExtrinsicFailed.is(event)
				)
				// we know that data for system.ExtrinsicFailed is
				// (DispatchError, DispatchInfo)
				.forEach(
					({
						event: {
							data: [error],
						},
					}) => {
						if ((error as DispatchError).isModule) {
							// for module errors, we have the section indexed, lookup
							const decoded = westmintApi.registry.findMetaError(
								(error as DispatchError).asModule
							);
							const { docs, method, section } = decoded;

							console.log(`${section}.${method}: ${docs.join(' ')}`);
						} else {
							// Other, CannotLookup, BadOrigin, no extra info
							console.log(error.toString());
						}
					}
				);
		}
	});

	/**
	 * Now we set the V3 multiLocation of both the relay chain's native asset and 
	 * the parachain's custom asset, and then use them to create the MultiAsset
	 * type.
	 * 
	 * NOTE: We still use the parachain api because we assume we are standing in
	 * the parachain.
	 */
	const nativeAsset = {
		V3: {
			parents: 1,
			interior: 'Here',
		},
	}
	const customAsset = {
		V3: {
			parents: 0,
			interior: {
				X2: {
					palletInstance: 50,
					generalIndex: assetInfo.assetId,
				}
			}
		}
	}
	const destNativeAsset = westmintApi.createType('MultiAsset', nativeAsset);
	const destCustomAsset = westmintApi.createType('MultiAsset', customAsset);

	/**
	 * We create the second batch of txs with the assetConversion pallet to
	 * create the liquidity pool and add liquidity to it.
	 * Then we sign and send the batch and await its resolution, while we check 
	 * the status to see when it's included in a block or finalized and listen 
	 * for errors.
	 * 
	 * NOTE: Polkadot-js/api ^v1.9.1 does not expose the assetConversion pallet,
	 * but the call can be made through Polkadot-js/apps. 
	 */
	txs = [
		westmintApi.tx.assetConversion
			.createPool(
				{ Native: destNativeAsset },
				{ Asset: destCustomAsset }
			),
		westmintApi.tx.assetConversion
			.addLiquidity(
				{ Native: destNativeAsset },
				{ Asset: destCustomAsset },
				Number(1000000000000),
				Number(1000000000000),
				Number(1000000000000),
				Number(1000000000000),
				alice.address
			),
	];
	batch = westmintApi.tx.utility.batchAll(txs);
	await batch.signAndSend(alice, { nonce: -1 }, ({ status, events }) => {
		if (status.isInBlock || status.isFinalized) {
			events
				// find/filter for failed events
				.filter(({ event }) =>
					westmintApi.events.system.ExtrinsicFailed.is(event)
				)
				// we know that data for system.ExtrinsicFailed is
				// (DispatchError, DispatchInfo)
				.forEach(
					({
						event: {
							data: [error],
						},
					}) => {
						if ((error as DispatchError).isModule) {
							// for module errors, we have the section indexed, lookup
							const decoded = westmintApi.registry.findMetaError(
								(error as DispatchError).asModule
							);
							const { docs, method, section } = decoded;

							console.log(`${section}.${method}: ${docs.join(' ')}`);
						} else {
							// Other, CannotLookup, BadOrigin, no extra info
							console.log(error.toString());
						}
					}
				);
		}
	});

	/**
	 * Here we check whether the liquidity pool exists for the asset by querying
	 * the storage.
	 */
	const pools = await westmintApi.query.assetConversion.pools([nativeAsset,
		customAsset]);
	if (pools === null || undefined) {
		console.error(new Error('Liquidity pool non existent'))
	}
}

const main = async () => {
	await cryptoWaitReady();

	await setup();

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