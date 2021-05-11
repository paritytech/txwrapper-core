"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveAddress = void 0;
const keyring_1 = require("@polkadot/keyring");
/**
 * Derive an address from a cryptographic public key offline.
 *
 * @param publicKey - The public key to derive from.
 * @param ss58Format - The SS58 format to use.
 */
function deriveAddress(publicKey, ss58Format) {
    return keyring_1.encodeAddress(publicKey, ss58Format);
}
exports.deriveAddress = deriveAddress;
//# sourceMappingURL=deriveAddress.js.map