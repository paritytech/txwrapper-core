"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistryMandala = void 0;
const type_definitions_1 = require("@acala-network/type-definitions");
const types_1 = require("@polkadot/types");
const types_known_1 = require("@polkadot/types-known");
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Mandala registry creator for testing.
 *
 * @param specVersion
 * @param metadataRpc
 */
function getRegistryMandala(specVersion, metadataRpc) {
    const registry = new types_1.TypeRegistry();
    registry.setKnownTypes({
        typesBundle: type_definitions_1.typesBundleForPolkadot,
    });
    return txwrapper_core_1.getRegistryBase({
        chainProperties: {
            tokenDecimals: 18,
            tokenSymbol: 'ACA',
            // substrate prefix (42), is the common prefix for the test chains
            ss58Format: txwrapper_core_1.PolkadotSS58Format.substrate,
        },
        specTypes: types_known_1.getSpecTypes(registry, 'Mandala', 'mandala', specVersion),
        metadataRpc,
    });
}
exports.getRegistryMandala = getRegistryMandala;
//# sourceMappingURL=getRegistryMandala.js.map