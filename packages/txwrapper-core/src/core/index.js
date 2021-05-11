"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = exports.getSpecTypes = exports.toTxMethod = exports.defineMethod = exports.getRegistryBase = exports.createMetadata = exports.decode = void 0;
const construct_1 = require("./construct");
var decode_1 = require("./decode");
Object.defineProperty(exports, "decode", { enumerable: true, get: function () { return decode_1.decode; } });
var metadata_1 = require("./metadata");
Object.defineProperty(exports, "createMetadata", { enumerable: true, get: function () { return metadata_1.createMetadata; } });
Object.defineProperty(exports, "getRegistryBase", { enumerable: true, get: function () { return metadata_1.getRegistryBase; } });
var method_1 = require("./method");
Object.defineProperty(exports, "defineMethod", { enumerable: true, get: function () { return method_1.defineMethod; } });
Object.defineProperty(exports, "toTxMethod", { enumerable: true, get: function () { return method_1.toTxMethod; } });
__exportStar(require("./util"), exports);
var types_known_1 = require("@polkadot/types-known");
Object.defineProperty(exports, "getSpecTypes", { enumerable: true, get: function () { return types_known_1.getSpecTypes; } });
/**
 * Functions for each step of the transaction construction process.
 */
exports.construct = {
    signedTx: construct_1.createSignedTx,
    signingPayload: construct_1.createSigningPayload,
    encodeUnsignedTransaction: construct_1.encodeUnsignedTransaction,
    txHash: construct_1.getTxHash,
};
//# sourceMappingURL=index.js.map