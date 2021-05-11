"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTxHash = void 0;
const util_crypto_1 = require("@polkadot/util-crypto");
/**
 * Derive the tx hash of a signed transaction offline.
 *
 * @param signedTx - The hex encoding of a signed transaction
 */
function getTxHash(signedTx) {
    return util_crypto_1.blake2AsHex(signedTx, 256);
}
exports.getTxHash = getTxHash;
//# sourceMappingURL=getTxHash.js.map