/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * @ignore Don't show this file in documentation.
 */ /** */

import {
  decode,
  encodeUnsignedTransaction,
  getEthereumPayload,
  getPolkadotStatement,
  getRegistry,
  getTxHash,
  methods,
} from '../src';
import { rpcToNode } from './util';

/**
 * Entry point of the script. This script assumes a Polkadot node is running
 * locally on `http://localhost:9933`.
 */
async function main(): Promise<void> {
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

  // Create Polkadot's type registry.
  const registry = getRegistry('Polkadot', 'polkadot', specVersion);

  const polkadotAddress = '13xGBRvbBR9st4c5CVADqXntUYHbHWCPAyMcEK45P5HFAGEZ';
  const statementSentence = getPolkadotStatement('Regular');

  const ethStatement = getEthereumPayload(polkadotAddress, statementSentence, {
    metadataRpc,
    registry,
  });
  console.log(`\nETH Statement to Sign: ${ethStatement}`);

  const ethSignature =
    '0x242a48b579e01900822a81d58be5115a86b5d919d552490e426e2af71a11f39e54d78351228e3fff8c2956e71b4e7d982c57d146aa9f52d9b7227a505510a3fb1b';

  // Now we can create our `claims.claimAttest` unsigned tx.
  const unsigned = methods.claims.claimAttest(
    {
      dest: polkadotAddress,
      ethereumSignature: ethSignature,
      statement: statementSentence.sentence,
    },
    {
      address: polkadotAddress,
      blockHash,
      blockNumber: registry
        .createType('BlockNumber', block.header.number)
        .toNumber(),
      eraPeriod: 64,
      genesisHash,
      metadataRpc,
      nonce: 0,
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
    `\nDecoded Transaction\n  Statement: ${decodedUnsigned.method.args.statement}`
  );

  // Create an extrinsic, but don't add any signature to it.
  const tx = encodeUnsignedTransaction(unsigned, { registry });
  console.log(`Encoded Tx: ${tx}`);

  // Derive the tx hash of a signed transaction offline.
  const expectedTxHash = getTxHash(tx);
  console.log(`\nExpected Tx Hash: ${expectedTxHash}`);

  // Send the tx to the node. Again, since `txwrapper` is offline-only, this
  // operation should be handled externally. Here, we just send a JSONRPC
  // request directly to the node.
  const actualTxHash = await rpcToNode('author_submitExtrinsic', [tx]);
  console.log(`Actual Tx Hash: ${actualTxHash}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
