/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * @ignore Don't show this file in documentation.
 */

import { Keyring } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import {
	construct,
	decode,
	deriveAddress,
	getRegistry,
	PolkadotSS58Format,
} from '@substrate/txwrapper-polkadot';

import { foreignAssets } from '../../../txwrapper-substrate/src/methods';
import { rpcToLocalNode, signWith } from '../../common/util';

/**
 * Entry point of the script. This script assumes a substrate node is running
 * locally. Refer to the README.md file for instructions on which port to provide for the rpc call.
 */
async function main(): Promise<void> {
	// Wait for the promise to resolve async WASM
	await cryptoWaitReady();
	// Create a new keyring, and add an "Alice" account
	const keyring = new Keyring();
	const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
	console.log(
		"Alice's SS58-Encoded Address:",
		deriveAddress(alice.publicKey, PolkadotSS58Format.polkadot),
	);

	// Construct a balance transfer transaction offline.
	// To construct the tx, we need some up-to-date information from the node.
	// `txwrapper` is offline-only, so does not care how you retrieve this info.
	// In this tutorial, we simply send RPC requests to the node.
	const { block } = await rpcToLocalNode('chain_getBlock');
	const blockHash = await rpcToLocalNode('chain_getBlockHash');
	const genesisHash = await rpcToLocalNode('chain_getBlockHash', [0]);
	const metadataRpc = await rpcToLocalNode('state_getMetadata');
	const { specVersion, transactionVersion, specName } = await rpcToLocalNode(
		'state_getRuntimeVersion',
	);

	/**
	 * Create Polkadot's type registry.
	 *
	 * When creating a type registry, it accepts a `asCallsOnlyArg` option which
	 * defaults to false. When true this will minimize the size of the metadata
	 * to only include the calls. This removes storage, events, etc.
	 * This will ultimately decrease the size of the metadata stored in the registry.
	 *
	 * Example:
	 *
	 * ```
	 * const registry = getRegistry({
	 *  chainName: 'Polkadot',
	 *  specName,
	 *  specVersion,
	 *  metadataRpc,
	 *  asCallsOnlyArg: true,
	 * });
	 * ```
	 */
	const registry = getRegistry({
		chainName: 'asset-hub-paseo',
		specName,
		specVersion,
		metadataRpc,
	});

	/**
	 * Now we can create our `foreignAssets.transferKeepAlive` unsigned tx. The following
	 * function takes the above data as arguments, so it can be performed offline
	 * if desired.
	 *
	 * In order to decrease the size of the metadata returned in the unsigned transaction,
	 * be sure to include `asCallsOnlyArg` field in the options.
	 * Ex:
	 * {
	 *   metadataRpc,
	 *   registry,
	 *   asCallsOnlyArg: true
	 * }
	 */
	const nonce = await rpcToLocalNode('account_nextIndex', [alice.address]);
	const unsigned = foreignAssets.transferKeepAlive(
		{
			amount: '10000000000000',
			target: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', // Bob
			id: { parents: 1, interior: { X1: { Parachain: 3369 } } },
		},
		{
			address: deriveAddress(alice.publicKey, PolkadotSS58Format.polkadot),
			blockHash,
			blockNumber: registry
				.createType('BlockNumber', block.header.number)
				.toNumber(),
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
		},
	);

	// Decode an unsigned transaction.
	const decodedUnsigned = decode(unsigned, {
		metadataRpc,
		registry,
	});

	console.log(
		`\nDecoded Transaction\n  To: ${
			(decodedUnsigned.method.args.target as { id: string })?.id
		}\n` + `  Amount: ${JSON.stringify(decodedUnsigned.method.args.amount)}`,
	);

	// Construct the signing payload from an unsigned transaction.
	const signingPayload = construct.signingPayload(unsigned, { registry });
	console.log(`\nPayload to Sign: ${signingPayload}`);

	// Decode the information from a signing payload.
	const payloadInfo = decode(signingPayload, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n  To: ${
			(payloadInfo.method.args.target as { id: string })?.id
		}\n` + `  Amount: ${JSON.stringify(payloadInfo.method.args.amount)}\n`,
	);

	// Sign a payload. This operation should be performed on an offline device.
	const signature = signWith(alice, unsigned, {
		metadataRpc,
		registry,
	});
	console.log(`\nSignature: ${signature}`);

	// Serialize a signed transaction.
	const tx = construct.signedTx(unsigned, signature, {
		metadataRpc,
		registry,
	});
	console.log(`\nTransaction to Submit: ${tx}`);

	// Derive the tx hash of a signed transaction offline.
	const expectedTxHash = construct.txHash(tx);
	console.log(`\nExpected Tx Hash: ${expectedTxHash}`);

	// Decode a signed payload.
	const txInfo = decode(tx, {
		metadataRpc,
		registry,
	});

	console.log(
		`\nDecoded Transaction\n  To: ${
			(txInfo.method.args.target as { id: string })?.id
		}\n` + `  Amount: ${JSON.stringify(txInfo.method.args.amount)}\n`,
	);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
