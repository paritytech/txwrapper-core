"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signWithAlice = void 0;
const api_1 = require("@polkadot/api");
const util_crypto_1 = require("@polkadot/util-crypto");
const constants_1 = require("./constants");
const getRegistryPolkadot_1 = require("./getRegistryPolkadot");
/**
 * Sign a payload with seed `//Alice`.
 */
async function signWithAlice(signingPayload) {
    // We're creating an Alice account that will sign the payload
    // Wait for the promise to resolve async WASM
    await util_crypto_1.cryptoWaitReady();
    const registry = getRegistryPolkadot_1.getRegistryPolkadot(25, constants_1.metadataRpc);
    // Use ed25519 because it has deterministic signatures
    const keyring = new api_1.Keyring({ type: 'ed25519' });
    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });
    const { signature } = registry
        .createType('ExtrinsicPayload', signingPayload, {
        version: 4,
    })
        .sign(alice);
    return signature;
}
exports.signWithAlice = signWithAlice;
//# sourceMappingURL=signWithAlice.js.map