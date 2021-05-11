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
const txwrapper_polkadot_1 = require("@substrate/txwrapper-polkadot");
const util_1 = require("./util");
/**
 * Entry point of the script. This script assumes a Polkadot node is running
 * locally on `http://localhost:9933`.
 */
async function main() {
    // Wait for the promise to resolve async WASM
    await util_crypto_1.cryptoWaitReady();
    // Create a new keyring, and add an "Alice" account
    const keyring = new api_1.Keyring();
    const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
    console.log("Alice's SS58-Encoded Address:", txwrapper_polkadot_1.deriveAddress(alice.publicKey, txwrapper_polkadot_1.PolkadotSS58Format.polkadot));
    // Construct a balance transfer transaction offline.
    // To construct the tx, we need some up-to-date information from the node.
    // `txwrapper` is offline-only, so does not care how you retrieve this info.
    // In this tutorial, we simply send RPC requests to the node.
    const { block } = await util_1.rpcToLocalNode('chain_getBlock');
    const blockHash = await util_1.rpcToLocalNode('chain_getBlockHash');
    const genesisHash = await util_1.rpcToLocalNode('chain_getBlockHash', [0]);
    const metadataRpc = await util_1.rpcToLocalNode('state_getMetadata');
    const { specVersion, transactionVersion, specName } = await util_1.rpcToLocalNode('state_getRuntimeVersion');
    // Create Polkadot's type registry.
    const registry = txwrapper_polkadot_1.getRegistry({
        chainName: 'Polkadot',
        specName,
        specVersion,
        metadataRpc,
    });
    // Metadata and type defintion registry used to create the calls
    const optionsWithMeta = {
        registry: registry,
        metadataRpc: metadataRpc,
    };
    // Arguments for 12 balances transferKeepAlive
    const transferArgs = [
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '1000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '2000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '3000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '4000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '5000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '6000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '7000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '8000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '9000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '10000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '11000000000',
        },
        {
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            value: '12000000000',
        },
    ];
    // Create an array of `balances.transferKeepAlive().method`s. We just need the
    // `method` from the `UnsignedTransaction` that txwrapper methods returns.
    const txMethods = transferArgs.map((args) => {
        const txInfo = txwrapper_polkadot_1.methods.balances.transferKeepAlive(args, {
            address: alice.address,
            blockHash: blockHash,
            blockNumber: block.header.number,
            genesisHash,
            metadataRpc,
            nonce: 0,
            specVersion: specVersion,
            transactionVersion,
        }, optionsWithMeta);
        return txInfo.method;
    });
    // Create a `utility.batchAll` unsigned tx. Based on the above code the
    // `calls` argument for `batchAll` (`txMethods`)  is of type
    // `Array<UnsignedTransaction.method>`
    const unsigned = txwrapper_polkadot_1.methods.utility.batchAll({
        calls: txMethods,
    }, {
        address: alice.address,
        blockHash: blockHash,
        blockNumber: block.header.number,
        genesisHash,
        metadataRpc,
        nonce: 0,
        specVersion: specVersion,
        tip: 0,
        eraPeriod: 64,
        transactionVersion,
    }, optionsWithMeta);
    // Decode an unsigned transaction.
    const decodedUnsigned = txwrapper_polkadot_1.decode(unsigned, {
        metadataRpc,
        registry,
    });
    console.log(`\nDecoded Transaction\n  calls: ${JSON.stringify(decodedUnsigned.method.args.calls)}\n`);
    // Construct the signing payload from an unsigned transaction.
    const signingPayload = txwrapper_polkadot_1.construct.signingPayload(unsigned, { registry });
    console.log(`\nPayload to Sign: ${signingPayload}`);
    // Decode the information from a signing payload.
    const payloadInfo = txwrapper_polkadot_1.decode(signingPayload, {
        metadataRpc,
        registry,
    });
    console.log(`\nDecoded Transaction\n  calls: ${JSON.stringify(payloadInfo.method.args.calls)}\n`);
    // Sign a payload. This operation should be performed on an offline device.
    const signature = util_1.signWith(alice, signingPayload, {
        metadataRpc,
        registry,
    });
    console.log(`\nSignature: ${signature}`);
    // Serialize a signed transaction.
    const tx = txwrapper_polkadot_1.construct.signedTx(unsigned, signature, {
        metadataRpc,
        registry,
    });
    console.log(`\nTransaction to Submit: ${tx}`);
    // Derive the tx hash of a signed transaction offline.
    const expectedTxHash = txwrapper_polkadot_1.construct.txHash(tx);
    console.log(`\nExpected Tx Hash: ${expectedTxHash}`);
    // Send the tx to the node. Again, since `txwrapper` is offline-only, this
    // operation should be handled externally. Here, we just send a JSONRPC
    // request directly to the node.
    const actualTxHash = await util_1.rpcToLocalNode('author_submitExtrinsic', [tx]);
    console.log(`Actual Tx Hash: ${actualTxHash}`);
    // Decode a signed payload.
    const txInfo = txwrapper_polkadot_1.decode(tx, {
        metadataRpc,
        registry,
    });
    console.log(`\nDecoded Transaction\n  calls: ${JSON.stringify(txInfo.method.args.calls)}\n`);
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=polkadotBatchAll.js.map