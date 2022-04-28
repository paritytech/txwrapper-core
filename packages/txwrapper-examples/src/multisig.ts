/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * @ignore Don't show this file in documentation.
 */

import { Keyring } from '@polkadot/api';
import { KeyringPair } from '@polkadot/keyring/types';
import {
	createKeyMulti,
	encodeAddress,
	sortAddresses,
} from '@polkadot/util-crypto';
import { cryptoWaitReady, xxhashAsHex, blake2AsHex } from '@polkadot/util-crypto';
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

const signatories = ['Alice', 'Bob', 'Charlie'];

// The `delay` function that will be used before the `asMulti` call.
function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function createMultisigAccount(
	keyring: Keyring
): [string[], string, { [key: string]: KeyringPair }, string] {
	console.log(`\nCreating a MultiSig Account`);
	console.log(`=============================\n`);

	// For every signatory [Alice, Bob and Charlie]
	// add its corresponding account in the newly created keyring
	// and then save the derived address in the `addressesDict`
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

		return addressesDict[signatories[idx]];
	});

	console.log(
		'The accounts/addresses that compose the Multi Signature Account'
	);
	console.log(addressesArray);

	// Address as a byte array.
	const multiAddress = createKeyMulti(addressesArray, THRESHOLD_FOR_MULTISIG);

	// Convert byte array to SS58 encoding.
	const Ss58MultiSigAddress = encodeAddress(multiAddress, SS58Prefix);

  // Encode the multisig address in hexadecimal
  const multisigAddressInHex = Buffer.from(multiAddress).toString('hex');

	console.log(`\nMultisig Address: ${Ss58MultiSigAddress}`);

	return [addressesArray, Ss58MultiSigAddress, signatoriesDict, multisigAddressInHex];
}

function createOtherSignatories(
	addressesArray: string[],
	senderIndex: number
): string[] {
	// Take addresses and remove the sender.
	const otherSignatories = addressesArray.filter(
		(who) => who !== addressesArray[senderIndex]
	);

	// Sort them by public key.
	const otherSignatoriesSorted = sortAddresses(otherSignatories, SS58Prefix);

	console.log(`\nOther Signatories: ${otherSignatoriesSorted}\n`);

	return otherSignatoriesSorted;
}

async function main(): Promise<void> {
	/**
	 * This script assumes a Polkadot node is running
	 * locally on `http://localhost:9933`.
	 */
	await cryptoWaitReady();

	// Create a new keyring
	const keyring = new Keyring();

	// Create a multisig account from the accounts Alice, Bob and Charlie
	// and return
	// 1. addressesArray = the addresses that are in the Multisig Account
	// 2. Ss58MultiSigAddress = the address of the Multisig Account
	// 3. signatoriesDict = all the KeyringPair info per signatory
	const [addressesArray, Ss58MultiSigAddress, signatoriesDict, multisigAddressInHex] =
		createMultisigAccount(keyring);

	// Create Signatories Sorted excluding the sender (Alice)
	const otherSignatoriesSortedExAlice = createOtherSignatories(
		addressesArray,
		signatories.indexOf('Alice')
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
			nonce: 0, // Assuming this is the first tx that Alice will sign
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
	const decodedUnsignedTXMulti = decode(unsignedTXMulti, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n  To: ${
			(decodedUnsignedTXMulti.method.args.dest as { id: string })?.id
		}\n` +
			`  Amount: ${decodedUnsignedTXMulti.method.args.value}` +
			`\n` +
			`  From: ${decodedUnsignedTXMulti.address}`
	);

	// Encoded method of the unsigned multisig tx
	const unsignedTXMultiEncodedMethod = unsignedTXMulti.method;
	console.log(
		`\nUnsigned Tx Multi Encoded Method: ${unsignedTXMultiEncodedMethod}`
	);

	// Derive the tx hash of an unsigned multisig transaction.
	const callTxHashMulti = construct.txHash(unsignedTXMultiEncodedMethod);
	console.log(`\nCall Hash of unsignedTXMulti: ${callTxHashMulti}`);

	// The next steps include the calls `approveAsMulti` and `asMulti`
	// in order to send funds from the MultiSig account to another address,
	// in this case to Eve.

	console.log(`\nCalling ApproveAsMulti`);
	console.log(`========================`);

	const unsignedTxApproveAsMulti = substrateMethods.multisig.approveAsMulti(
		{
			threshold: THRESHOLD_FOR_MULTISIG,
			otherSignatories: otherSignatoriesSortedExAlice,
			maybeTimepoint: null,
			callHash: callTxHashMulti,
			maxWeight: '640000000',
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
			nonce: 1, // Assuming this is the second tx that Alice will sign
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
	const decodedUnsignedApproveAsMulti = decode(unsignedTxApproveAsMulti, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n` +
			`  Threshold: ${decodedUnsignedApproveAsMulti.method.args.threshold}` +
			`\n` +
			`  Approve From: ${decodedUnsignedApproveAsMulti.address}`
	);

	// Construct the signing payload from an unsigned transaction.
	const signingPayloadApproveAsMulti = construct.signingPayload(
		unsignedTxApproveAsMulti,
		{
			registry,
		}
	);
	console.log(`\nPayload to Sign: ${signingPayloadApproveAsMulti}`);

	// Sign a payload. This operation should be performed on an offline device.
	const signatureApproveAsMulti = signWith(
		signatoriesDict['Alice'],
		signingPayloadApproveAsMulti,
		{
			metadataRpc,
			registry,
		}
	);
	console.log(`\nSignature: ${signatureApproveAsMulti}`);

	// Serialize a signed transaction.
	const txApproveAsMulti = construct.signedTx(
		unsignedTxApproveAsMulti,
		signatureApproveAsMulti,
		{
			metadataRpc,
			registry,
		}
	);
	console.log(`\nTransaction to Submit: ${txApproveAsMulti}`);

	// Derive the tx hash of a signed transaction offline.
	const expectedTxHashApproveAsMulti = construct.txHash(txApproveAsMulti);
	console.log(
		`\nExpected Tx Hash of approveAsMulti: ${expectedTxHashApproveAsMulti}`
	);

	// Send the tx to the node. Again, since `txwrapper` is offline-only, this
	// operation should be handled externally. Here, we just send a JSONRPC
	// request directly to the node.
	const actualTxHashApproveAsMulti = await rpcToLocalNode(
		'author_submitExtrinsic',
		[txApproveAsMulti]
	);
	console.log(
		`Actual Tx Hash of approveAsMulti: ${actualTxHashApproveAsMulti}`
	);

	// Decode a signed payload.
	const txInfoApproveAsMulti = decode(txApproveAsMulti, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction approveAsMulti\n` +
			`  Call Hash of unsignedTXMulti: ${txInfoApproveAsMulti.method.args.callHash}\n` +
			`  Threshold of unsignedTXMulti: ${txInfoApproveAsMulti.method.args.threshold}`
	);

	// Create Signatories Sorted excluding the sender (Bob)
	const otherSignatoriesSortedExBob = createOtherSignatories(
		addressesArray,
		signatories.indexOf('Bob')
	);

  // In the following lines we dynamically retrieve the timepoint of the
  // Multisig call. To achieve that we do the following steps :
  // 1. Create the Storage key of our Multisig Storage item
  // 2. Make an RPC request to call the `state_getStorage` endpoint (using the Storage key from step 1)
  // 3. Create the Multisig type by using the result from the RPC call and the registry
  // 4. Get the `height` and `index` of our Multisig call from the Multisig type

  // 1. Creating the Storage key of our Multisig Storage item following
  // the schema below :
  // Twox128("Multisig") + Twox128("Multisigs") + Twox64(multisigAddress) + multisigAddress + Blake256(multisigCallHash)
  const multisigModuleHash = xxhashAsHex("Multisig", 128);
  const multisigStorageHash = xxhashAsHex("Multisigs", 128);
  const multisigAddressHash = xxhashAsHex(keyring.decodeAddress(Ss58MultiSigAddress), 64);
  const multisigCallHash = blake2AsHex(callTxHashMulti, 128);
  const multisigStorageKey = multisigModuleHash +
                            multisigStorageHash.substring(2) +
                            multisigAddressHash.substring(2) +
                            multisigAddressInHex +
                            multisigCallHash.substring(2) +
                            callTxHashMulti.substring(2);

  // Adding a delay so that the storage is updated with the Multisig info
  console.log(
		`\nWaiting 10 seconds before making the RPC request ` +
			`so that the storage is updated with the Multisig info\n`
	);
  await delay(10000);
  
  // 2. Make an RPC request to call the `state_getStorage` endpoint
  const multisigStorage = await rpcToLocalNode('state_getStorage', [multisigStorageKey]);

  console.log("\nMultisig Storage result: \n", multisigStorage);

  // 3. Create the Multisig type using the registry and the result from our RPC call to `state_getStorage`
  const multisigType = registry.createType("PalletMultisigMultisig", multisigStorage);

  // Retrieving the Multisig's index
  const multisigCallIndex = multisigType.when.index.toNumber();

  // Retrieving the Multisig's height
  const multisigCallHeight = multisigType.when.height.toNumber();

	// Added a delay of 15 seconds so that the asMulti call
	// is included in next blocks
	console.log(
		`\nWaiting 15 seconds before calling the asMulti ` +
			`so it is included in next blocks\n`
	);
	await delay(15000);

	console.log(`\nCalling AsMulti`);
	console.log(`=================`);
	// Calling the `asMulti` function by passing a "hardcoded" value in the
	// index of the `maybeTimepoint` argument.
	// Since this example is run in a controlled environment, we already
	// know the index of the multisig transaction (index = 3) so we can pass it
	// directly in the corresponding parameter.
	// In normal situations, the timepoint of the multisig transaction should be
	// dynamically retrieved and then passed as a variable in the `asMulti`
	// function.
	// The timepoint can be dynamically retrieved from the Multisigs storage item
	// (`pub type Multisigs<T: Config>`) found in the Multisig pallet.
	// The Multisigs storage item is keyed by the multisig AccountId and
	// call hash and its value (`pub struct Multisig`)
	// contains the timepoint (`when: Timepoint<BlockNumber>,`).
	const unsignedTxAsMulti = substrateMethods.multisig.asMulti(
		{
			threshold: THRESHOLD_FOR_MULTISIG,
			otherSignatories: otherSignatoriesSortedExBob,
			maybeTimepoint: {
				height: multisigCallHeight,
				index: multisigCallIndex,
			},
			call: unsignedTXMultiEncodedMethod,
			storeCall: false,
			maxWeight: '640000000',
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
			nonce: 0, // Assuming this is the first tx that Bob will sign
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
	const signingPayloadAsMulti = construct.signingPayload(unsignedTxAsMulti, {
		registry,
	});
	console.log(`\nPayload to Sign: ${signingPayloadAsMulti}`);

	// Sign a payload. This operation should be performed on an offline device.
	const signatureAsMulti = signWith(
		signatoriesDict['Bob'],
		signingPayloadAsMulti,
		{
			metadataRpc,
			registry,
		}
	);
	console.log(`\nSignature: ${signatureAsMulti}`);

	// Serialize a signed transaction.
	const txAsMulti = construct.signedTx(unsignedTxAsMulti, signatureAsMulti, {
		metadataRpc,
		registry,
	});
	console.log(`\nTransaction to Submit: ${txAsMulti}`);

	// Derive the tx hash of a signed transaction offline.
	const expectedTxHashAsMulti = construct.txHash(txAsMulti);
	console.log(`\nExpected Tx Hash of asMulti: ${expectedTxHashAsMulti}`);

	// Send the tx to the node. Again, since `txwrapper` is offline-only, this
	// operation should be handled externally. Here, we just send a JSONRPC
	// request directly to the node.
	const actualTxHashAsMulti = await rpcToLocalNode('author_submitExtrinsic', [
		txAsMulti,
	]);
	console.log(`Actual Tx Hash of asMulti: ${actualTxHashAsMulti}`);

	// Decode a signed payload.
	const txInfoAsMulti = decode(unsignedTxAsMulti, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction asMulti\n` +
			`  Call of unsignedTXMulti: ${txInfoAsMulti.method.args.call}\n` +
			`  Threshold of unsignedTXMulti: ${txInfoAsMulti.method.args.threshold}\n`
	);
}

main()
	.catch((err) => console.error(err))
	.finally(() => process.exit());
