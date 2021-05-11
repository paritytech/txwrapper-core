"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDecoratedConstants = exports.createDecoratedTx = void 0;
const decorate_1 = require("@polkadot/metadata/decorate");
const createMetadata_1 = require("./createMetadata");
/**
 * From a metadata hex string (for example returned by RPC), create decorated
 * modules with their calls (transactions).
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
function createDecoratedTx(registry, metadataRpc) {
    const metadata = createMetadata_1.createMetadata(registry, metadataRpc);
    return decorate_1.decorateExtrinsics(registry, metadata.asLatest, metadata.version);
}
exports.createDecoratedTx = createDecoratedTx;
/**
 * From a metadata hex string (for example returned by RPC), create decorated
 * modules with their constants.
 *
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
function createDecoratedConstants(registry, metadataRpc) {
    const metadata = createMetadata_1.createMetadata(registry, metadataRpc);
    return decorate_1.decorateConstants(registry, metadata.asLatest, metadata.version);
}
exports.createDecoratedConstants = createDecoratedConstants;
//# sourceMappingURL=createDecorated.js.map