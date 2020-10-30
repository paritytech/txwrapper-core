/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * @ignore Don't show this file in documentation.
 */ /** */

import { Keyring } from '@polkadot/api';
import { TypeRegistry } from '@polkadot/types';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import {
  createSignedTx,
  createSigningPayload,
  decode,
  deriveAddress,
  getTxHash,
  methods,
  WESTEND_SS58_FORMAT,
} from '../src/core';
import { rpcToNode, signWith } from './util';

/**
 * We're on a generic Substrate chain, default SS58 prefix is 42, which is
 * the same as Westend's prefix.
 */
const DEV_CHAIN_SS58_FORMAT = WESTEND_SS58_FORMAT;

/**
 * Entry point of the script. This script assumes a Substrate dev node is
 * running locally on `http://localhost:9933`.
 */
async function main(): Promise<void> {
  // Wait for the promise to resolve async WASM
  await cryptoWaitReady();
  // Create a new keyring, and add an "Alice" account
  const keyring = new Keyring();
  const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
  console.log(
    "Alice's SS58-Encoded Address:",
    deriveAddress(alice.publicKey, DEV_CHAIN_SS58_FORMAT)
  );

  // Construct a balance transfer transaction offline.
  // To construct the tx, we need some up-to-date information from the node.
  // `txwrapper` is offline-only, so does not care how you retrieve this info.
  // In this tutorial, we simply send RPC requests to the node.
  const { block } = await rpcToNode('chain_getBlock');
  const blockHash = await rpcToNode('chain_getBlockHash');
  const genesisHash = await rpcToNode('chain_getBlockHash', [0]);
  const metadataRpc = await rpcToNode('state_getMetadata');
  const { specVersion, transactionVersion } = await rpcToNode(
    'state_getRuntimeVersion'
  );

  // Create Substrate's type registry. If you're using a custom chain, you can
  // also put your own types here.
  const registry = new TypeRegistry();

  // Now we can create our `balances.transfer` unsigned tx. The following
  // function takes the above data as arguments, so can be performed offline
  // if desired.
  const unsigned = methods.balances.transfer(
    {
      value: 12,
      dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', // Bob
    },
    {
      address: deriveAddress(alice.publicKey, DEV_CHAIN_SS58_FORMAT),
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
    `\nDecoded Transaction\n  To: ${decodedUnsigned.method.args.dest}\n` +
      `  Amount: ${decodedUnsigned.method.args.value}`
  );

  // Construct the signing payload from an unsigned transaction.
  const signingPayload = createSigningPayload(unsigned, {
    registry,
  });
  console.log(`\nPayload to Sign: ${signingPayload}`);

  // Decode the information from a signing payload.
  const payloadInfo = decode(signingPayload, {
    metadataRpc,
    registry,
  });
  console.log(
    `\nDecoded Transaction\n  To: ${payloadInfo.method.args.dest}\n` +
      `  Amount: ${payloadInfo.method.args.value}`
  );

  // Sign a payload. This operation should be performed on an offline device.
  const signature = signWith(alice, signingPayload, {
    metadataRpc,
    registry,
  });
  console.log(`\nSignature: ${signature}`);

  // Serialize a signed transaction.
  const tx = createSignedTx(unsigned, signature, { metadataRpc, registry });
  console.log(`\nTransaction to Submit: ${tx}`);

  // Derive the tx hash of a signed transaction offline.
  const expectedTxHash = getTxHash(tx);
  console.log(`\nExpected Tx Hash: ${expectedTxHash}`);

  // Send the tx to the node. Again, since `txwrapper` is offline-only, this
  // operation should be handled externally. Here, we just send a JSONRPC
  // request directly to the node.
  const actualTxHash = await rpcToNode('author_submitExtrinsic', [tx]);
  console.log(`Actual Tx Hash: ${actualTxHash}`);

  // Decode a signed payload.
  const txInfo = decode(tx, {
    metadataRpc,
    registry,
  });
  console.log(
    `\nDecoded Transaction\n  To: ${txInfo.method.args.dest}\n` +
      `  Amount: ${txInfo.method.args.value}\n`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
