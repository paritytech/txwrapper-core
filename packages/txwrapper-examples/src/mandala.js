"use strict";
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * @ignore Don't show this file in documentation.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@polkadot/api");
const util_crypto_1 = require("@polkadot/util-crypto");
const txwrapper_acala_1 = require("txwrapper-acala");
const util_1 = require("./util");
async function main() {
    // Wait for the promise to resolve async WASM
    await util_crypto_1.cryptoWaitReady();
    // Create a new keyring, and add an "Alice" account
    const keyring = new api_1.Keyring();
    const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
    console.log("Alice's SS58-Encoded Address:", txwrapper_acala_1.deriveAddress(alice.publicKey, 
    // Use the default substrate development ss58 format
    42));
    // Construct a balance transfer transaction offline.
    // To construct the tx, we need some up-to-date information from the node.
    // `txwrapper` is offline-only, so does not care how you retrieve this info.
    // In this example, we simply send RPC requests to the node.
    const { block } = await util_1.rpcToLocalNode('chain_getBlock');
    const blockHash = await util_1.rpcToLocalNode('chain_getBlockHash');
    const genesisHash = await util_1.rpcToLocalNode('chain_getBlockHash', [0]);
    const metadataRpc = await util_1.rpcToLocalNode('state_getMetadata');
    const { specVersion, transactionVersion, specName } = await util_1.rpcToLocalNode('state_getRuntimeVersion');
    const registry = txwrapper_acala_1.getRegistry({
        chainName: 'Mandala',
        specName,
        specVersion,
        metadataRpc,
    });
    const unsigned = txwrapper_acala_1.methods.currencies.transfer({
        amount: '90071992547409910',
        // Alternative syntax: `registry.createType('CurrencyId', { Token: TokenSymbol.ACA })`
        currencyId: { Token: txwrapper_acala_1.TokenSymbol.ACA },
        dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', // Bob
    }, {
        address: txwrapper_acala_1.deriveAddress(alice.publicKey, 
        // Use the default substrate development ss58 format
        42),
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
    }, {
        metadataRpc,
        registry,
    });
    // Decode an unsigned transaction.
    const decodedUnsigned = txwrapper_acala_1.decode(unsigned, {
        metadataRpc,
        registry,
    });
    console.log(`\nDecoded Transaction\n  To: ${decodedUnsigned.method.args.dest}\n` +
        `  Amount: ${decodedUnsigned.method.args.amount}\n` +
        `  CurrencyId ${JSON.stringify(decodedUnsigned.method.args.currencyId)}`);
    // Construct the signing payload from an unsigned transaction.
    const signingPayload = txwrapper_acala_1.construct.signingPayload(unsigned, { registry });
    console.log(`\nPayload to Sign: ${signingPayload}`);
    const payloadInfo = txwrapper_acala_1.decode(signingPayload, {
        metadataRpc,
        registry,
    });
    console.log(`\nDecoded Transaction\n  To: ${payloadInfo.method.args.dest}\n` +
        `  Amount: ${payloadInfo.method.args.amount}\n` +
        `  CurrencyId ${JSON.stringify(payloadInfo.method.args.currencyId)}`);
    // Sign a payload. This operation should be performed on an offline device.
    const signature = util_1.signWith(alice, signingPayload, {
        metadataRpc,
        registry,
    });
    console.log(`\nSignature: ${signature}`);
    // Serialize a signed transaction.
    const tx = txwrapper_acala_1.construct.signedTx(unsigned, signature, {
        metadataRpc,
        registry,
    });
    console.log(`\nTransaction to Submit: ${tx}`);
    // Derive the tx hash of a signed transaction offline.
    const expectedTxHash = txwrapper_acala_1.construct.txHash(tx);
    console.log(`\nExpected Tx Hash: ${expectedTxHash}`);
    // Send the tx to the node. Again, since `txwrapper` is offline-only, this
    // operation should be handled externally. Here, we just send a JSONRPC
    // request directly to the node.
    const actualTxHash = await util_1.rpcToLocalNode('author_submitExtrinsic', [tx]);
    console.log(`Actual Tx Hash: ${actualTxHash}`);
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=mandala.js.map