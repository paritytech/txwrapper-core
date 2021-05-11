"use strict";
// Various metadata related constants and registry creator used for testing and
// and also for consumption.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistryPolkadot = void 0;
const types_1 = require("@polkadot/types");
const types_known_1 = require("@polkadot/types-known");
const core_1 = require("../core");
/**
 * Get the Polkadot type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
function getRegistryPolkadot(specVersion, metadataRpc) {
    return core_1.getRegistryBase({
        chainProperties: {
            ss58Format: 0,
            tokenDecimals: 10,
            tokenSymbol: 'DOT',
        },
        specTypes: types_known_1.getSpecTypes(new types_1.TypeRegistry(), 'Polkadot', 'polkadot', specVersion),
        metadataRpc,
    });
}
exports.getRegistryPolkadot = getRegistryPolkadot;
//# sourceMappingURL=getRegistryPolkadot.js.map