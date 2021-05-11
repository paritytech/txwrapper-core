"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistryBase = void 0;
const types_1 = require("@polkadot/types");
const createMetadata_1 = require("./createMetadata");
/**
 * Create a type registry given chainProperties, specTypes, and metadataRpc.
 */
function getRegistryBase({ chainProperties, specTypes, metadataRpc, }) {
    const registry = new types_1.TypeRegistry();
    const metadata = createMetadata_1.createMetadata(registry, metadataRpc);
    registry.register(specTypes);
    registry.setMetadata(metadata);
    // Register the chain properties for this registry
    registry.setChainProperties(registry.createType('ChainProperties', chainProperties));
    return registry;
}
exports.getRegistryBase = getRegistryBase;
//# sourceMappingURL=getRegistryBase.js.map