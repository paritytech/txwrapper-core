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
exports.getRegistry = exports.methods = void 0;
const type_definitions_1 = require("@acala-network/type-definitions");
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const txwrapper_orml_1 = require("@substrate/txwrapper-orml");
// Export methods of pallets included in the Acala / Mandala runtimes.
exports.methods = {
    currencies: txwrapper_orml_1.methods.currencies,
};
__exportStar(require("./TokenSymbol"), exports);
// Re-export all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
__exportStar(require("@substrate/txwrapper-core"), exports);
/**
 * `ChainProperties` for networks that txwrapper-acala supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
const KNOWN_CHAIN_PROPERTIES = {
    acala: {
        ss58Format: 10,
        tokenDecimals: 18,
        tokenSymbol: 'ACA',
    },
    mandala: {
        ss58Format: 42,
        tokenDecimals: 18,
        tokenSymbol: 'ACA',
    },
};
/**
 * Get a type registry for networks that txwrapper-acala supports.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */
function getRegistry({ specName, chainName, specVersion, metadataRpc, properties, }) {
    const registry = new txwrapper_core_1.TypeRegistry();
    registry.setKnownTypes({
        typesBundle: type_definitions_1.typesBundleForPolkadot,
    });
    return txwrapper_core_1.getRegistryBase({
        chainProperties: properties,
        specTypes: txwrapper_core_1.getSpecTypes(registry, chainName, specName, specVersion),
        metadataRpc,
    });
}
exports.getRegistry = getRegistry;
//# sourceMappingURL=index.js.map