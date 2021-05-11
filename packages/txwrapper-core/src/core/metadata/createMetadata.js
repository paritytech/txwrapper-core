"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMetadata = void 0;
const metadata_1 = require("@polkadot/metadata");
const memoizee_1 = __importDefault(require("memoizee"));
/**
 * From a metadata hex string (for example returned by RPC), create a Metadata
 * class instance. Metadata decoding is expensive, so this function is
 * memoized.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
function createMetadataUnmemoized(registry, metadataRpc) {
    return new metadata_1.Metadata(registry, metadataRpc);
}
/**
 * From a metadata hex string (for example returned by RPC), create a Metadata
 * class instance. Metadata decoding is expensive, so this function is
 * memoized.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
exports.createMetadata = memoizee_1.default(createMetadataUnmemoized, {
    length: 2,
});
//# sourceMappingURL=createMetadata.js.map