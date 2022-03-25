import { Keyring } from '@polkadot/api';
import { KeyringPair } from '@polkadot/keyring/types';
import {
	createKeyMulti,
	encodeAddress,
	sortAddresses,
} from '@polkadot/util-crypto';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import {
	construct,
	decode,
	deriveAddress,
	getRegistry,
	methods,
	PolkadotSS58Format,
} from '@substrate/txwrapper-polkadot';
import { methods as substrateMethods } from '@substrate/txwrapper-substrate';

import { rpcToLocalNode, signWith } from './util';

const SS58Prefix = 0;

// The number of accounts that must approve. Must be greater than 0 and less than
// or equal to the total number of addresses.
const THRESHOLD_FOR_MULTISIG = 2;

// The address (as index in `addresses`) that will submit a transaction.
const DEFAULT_ADDR_IDX = 0;

async function main(): Promise<void> {
	/**
	 * Entry point of the script. This script assumes a Polkadot node is running
	 * locally on `http://localhost:9933`.
	 */
	await cryptoWaitReady();

	// Create a new keyring
	const keyring = new Keyring();

	console.log(`\nCreating a MultiSig Account`);
	console.log(`=============================\n`);

	// For every signatory [Alice, Bob and Charlie]
	// add its corresponding account in the newly created keyring
	// and then save the derived address in the `addressesDict`
	const signatories = ['Alice', 'Bob', 'Charlie'];
	const addressesDict: { [key: string]: string } = {};
	const signatoriesDict: { [key: string]: KeyringPair } = {};

  const addressesArray = signatories.map((val, idx) => {
		signatoriesDict[signatories[idx]] = keyring.addFromUri(
			'//' + val,
			{ name: val },
			'sr25519'
		);
		addressesDict[signatories[idx]] = deriveAddress(
			signatoriesDict[signatories[idx]].publicKey,
			PolkadotSS58Format.polkadot
		);

		return addressesDict[signatories[idx]]
	});

	console.log(
		'The accounts/addresses that compose the Multi Signature Account'
	);
  console.log(addressesArray);

	// Address as a byte array.
	const multiAddress = createKeyMulti(addressesArray, THRESHOLD_FOR_MULTISIG);

	// Convert byte array to SS58 encoding.
	const Ss58MultiSigAddress = encodeAddress(multiAddress, SS58Prefix);

	console.log(`\nMultisig Address: ${Ss58MultiSigAddress}`);

	// Take addresses and remove the sender.
	const otherSignatories = addressesArray.filter(
		(who) => who !== addressesArray[DEFAULT_ADDR_IDX]
	);

	// Sort them by public key.
	const otherSignatoriesSorted = sortAddresses(otherSignatories, SS58Prefix);

	console.log(`\nOther Signatories: ${otherSignatoriesSorted}\n`);

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
	 */
	const registry = getRegistry({
		chainName: 'Polkadot',
		specName,
		specVersion,
		metadataRpc,
	});

	console.log(`\nSending funds from Alice Account to MultiSig`);
	console.log(`==============================================`);

	/**
	 * Now we can create our `balances.transferKeepAlive` unsigned tx to send
	 * funds from Alice to our newly created multisig account. The following
	 * function takes the above data as arguments, so it can be performed offline
	 * if desired.
	 *
	 * In order to decrease the size of the metadata returned in the unsigned transaction,
	 * be sure to include `asCallsOnlyArg` field in the options.
	 */
	const unsigned = methods.balances.transferKeepAlive(
		{
			value: '3000000000000000',
			dest: Ss58MultiSigAddress, // MultiSig Address
		},
		{
			address: deriveAddress(
				signatoriesDict['Alice'].publicKey,
				PolkadotSS58Format.polkadot
			),
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

	// Sign a payload. This operation should be performed on an offline device.
	const signature = signWith(signatoriesDict['Alice'], signingPayload, {
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

	console.log(`\nSending funds from the MultiSig Account to Eve`);
	console.log(`==============================================\n`);

	const eve = keyring.addFromUri('//Eve', { name: 'Eve' }, 'sr25519');
	const eveSs58Address = deriveAddress(
		eve.publicKey,
		PolkadotSS58Format.polkadot
	);
	console.log("Eve's SS58-Encoded Address:", eveSs58Address);

	const unsignedTXMulti = methods.balances.transferKeepAlive(
		{
			value: '1500000000000000',
			dest: eveSs58Address, // Eve's Address
		},
		{
			address: Ss58MultiSigAddress,
			blockHash,
			blockNumber: registry
				.createType('BlockNumber', block.header.number)
				.toNumber(),
			eraPeriod: 64,
			genesisHash,
			metadataRpc,
			nonce: 0, // Assuming this is the first tx from the MultiSig on the chain
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
	const decodedUnsigned1 = decode(unsignedTXMulti, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n  To: ${
			(decodedUnsigned1.method.args.dest as { id: string })?.id
		}\n` +
			`  Amount: ${decodedUnsigned1.method.args.value}` +
			`\n` +
			`  From: ${decodedUnsigned1.address}`
	);

	// Construct the signing payload from an unsigned transaction.
	const signingPayload1 = construct.signingPayload(unsignedTXMulti, {
		registry,
	});
	console.log(`\nPayload to Sign: ${signingPayload1}`);

	// Derive the tx hash of an unsigned payload.
	const expectedTxHash1 = construct.txHash(signingPayload1);
	console.log(`\nExpected Tx Hash: ${expectedTxHash1}`);

	// The next steps include the calls `approveAsMulti` and `asMulti`
	// in order to send funds from the MultiSig account to another address,
	// in this case to Eve.

	console.log(`\nCalling ApproveAsMulti`);
	console.log(`========================`);

	const txApproveAsMulti = substrateMethods.multisig.approveAsMulti(
		{
			threshold: THRESHOLD_FOR_MULTISIG,
			otherSignatories: otherSignatoriesSorted,
			maybeTimepoint: null,
			callHash: expectedTxHash1,
			maxWeight: '900719925474',
		},
		{
			address: deriveAddress(
				signatoriesDict['Alice'].publicKey,
				PolkadotSS58Format.polkadot
			),
			blockHash,
			blockNumber: registry
				.createType('BlockNumber', block.header.number)
				.toNumber(),
			eraPeriod: 64,
			genesisHash,
			metadataRpc,
			nonce: 1, // Assuming this is the first tx from the MultiSig on the chain
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
	const decodedUnsigned2 = decode(txApproveAsMulti, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n` +
			`  Threshold: ${decodedUnsigned2.method.args.threshold}` +
			`\n` +
			`  Approve From: ${decodedUnsigned2.address}`
	);

	// Construct the signing payload from an unsigned transaction.
	const signingPayload2 = construct.signingPayload(txApproveAsMulti, {
		registry,
	});
	console.log(`\nPayload to Sign: ${signingPayload2}`);

	// Sign a payload. This operation should be performed on an offline device.
	const signature2 = signWith(signatoriesDict['Alice'], signingPayload2, {
		metadataRpc,
		registry,
	});
	console.log(`\nSignature: ${signature2}`);

	// Serialize a signed transaction.
	const tx2 = construct.signedTx(txApproveAsMulti, signature2, {
		metadataRpc,
		registry,
	});
	console.log(`\nTransaction to Submit: ${tx2}`);

	// Derive the tx hash of a signed transaction offline.
	const expectedTxHash2 = construct.txHash(tx2);
	console.log(`\nExpected Tx Hash: ${expectedTxHash2}`);

	// Send the tx to the node. Again, since `txwrapper` is offline-only, this
	// operation should be handled externally. Here, we just send a JSONRPC
	// request directly to the node.
	const actualTxHash2 = await rpcToLocalNode('author_submitExtrinsic', [tx2]);
	console.log(`Actual Tx Hash: ${actualTxHash2}`);

	// Decode a signed payload.
	const txInfoMulti = decode(tx2, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction ApproveAsmulti\n` +
			`  Call Hash: ${txInfoMulti.method.args.callHash}\n` +
			`  Threshold: ${txInfoMulti.method.args.threshold}`
	);

	console.log(`\nCalling AsMulti`);
	console.log(`=================`);

	const txAsMulti = substrateMethods.multisig.asMulti(
		{
			threshold: THRESHOLD_FOR_MULTISIG,
			otherSignatories: otherSignatoriesSorted,
			maybeTimepoint: {
				height: registry
				.createType('BlockNumber', block.header.number)
				.toNumber(),
				index: 1,
			},
			call: signingPayload1,
			storeCall: false,
			maxWeight: '900719925474',
		},
		{
			address: deriveAddress(
				signatoriesDict['Bob'].publicKey,
				PolkadotSS58Format.polkadot
			),
			blockHash,
			blockNumber: registry
				.createType('BlockNumber', block.header.number)
				.toNumber(),
			eraPeriod: 64,
			genesisHash,
			metadataRpc,
			nonce: 2, // Assuming this is the first tx from the MultiSig on the chain
			specVersion,
			tip: 0,
			transactionVersion,
		},
		{
			metadataRpc,
			registry,
		}
	);

	// Construct the signing payload from an unsigned transaction.
	const signingPayload3 = construct.signingPayload(txAsMulti, { registry });
	console.log(`\nPayload to Sign: ${signingPayload3}`);

	// Sign a payload. This operation should be performed on an offline device.
	const signature3 = signWith(signatoriesDict['Bob'], signingPayload3, {
		metadataRpc,
		registry,
	});
	console.log(`\nSignature: ${signature3}`);

	// Serialize a signed transaction.
	const tx3 = construct.signedTx(txAsMulti, signature3, {
		metadataRpc,
		registry,
	});
	console.log(`\nTransaction to Submit: ${tx3}`);

	// Derive the tx hash of a signed transaction offline.
	const expectedTxHash3 = construct.txHash(tx3);
	console.log(`\nExpected Tx Hash: ${expectedTxHash3}`);

	// Send the tx to the node. Again, since `txwrapper` is offline-only, this
	// operation should be handled externally. Here, we just send a JSONRPC
	// request directly to the node.
	const actualTxHash3 = await rpcToLocalNode('author_submitExtrinsic', [tx3]);
	console.log(`Actual Tx Hash: ${actualTxHash3}`);

	process.exit();
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
