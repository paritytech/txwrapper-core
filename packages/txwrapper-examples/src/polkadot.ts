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
	methods,
	PolkadotSS58Format,
} from '@substrate/txwrapper-polkadot';

import { rpcToLocalNode, signWith } from './util';

/**
 * Entry point of the script. This script assumes a Polkadot node is running
 * locally on `http://localhost:9933`.
 */
async function main(): Promise<void> {
	// Wait for the promise to resolve async WASM
	await cryptoWaitReady();
	// Create a new keyring, and add an "Alice" account
	const keyring = new Keyring();
	const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
	console.log(
		"Alice's SS58-Encoded Address:",
		deriveAddress(alice.publicKey, PolkadotSS58Format.polkadot)
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
		'state_getRuntimeVersion'
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
	 *	specName,
	 *	specVersion,
	 *	metadataRpc,
	 *  asCallsOnlyArg: true,
	 * });
	 * ```
	 */
	const registry = getRegistry({
		chainName: 'Polkadot',
		specName,
		specVersion,
		metadataRpc,
	});

	/**
	 * Now we can create our `balances.transferKeepAlive` unsigned tx. The following
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
	const unsigned = methods.balances.transferKeepAlive(
		{
			value: '90071992547409910',
			dest: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // Bob
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
			nonce: 0, // Assuming this is Alice's first tx on the chain
			specVersion,
			tip: 0,
			transactionVersion,
		},
		{
			metadataRpc,
			registry,
		}
	);

	// Decode an unsigned transaction.
	const decodedUnsigned = decode(unsigned, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n  To: ${
			(decodedUnsigned.method.args.dest as { id: string })?.id
		}\n` + `  Amount: ${decodedUnsigned.method.args.value}`
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
			(payloadInfo.method.args.dest as { id: string })?.id
		}\n` + `  Amount: ${payloadInfo.method.args.value}`
	);

	// Sign a payload. This operation should be performed on an offline device.
	const signature = signWith(alice, signingPayload, {
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

	// Send the tx to the node. Again, since `txwrapper` is offline-only, this
	// operation should be handled externally. Here, we just send a JSONRPC
	// request directly to the node.
	const actualTxHash = await rpcToLocalNode('author_submitExtrinsic', [tx]);
	console.log(`Actual Tx Hash: ${actualTxHash}`);

	// Decode a signed payload.
	const txInfo = decode(tx, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n  To: ${
			(txInfo.method.args.dest as { id: string })?.id
		}\n` + `  Amount: ${txInfo.method.args.value}\n`
	);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
