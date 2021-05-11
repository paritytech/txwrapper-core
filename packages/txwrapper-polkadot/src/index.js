"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistry = exports.methods = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const txwrapper_substrate_1 = require("@substrate/txwrapper-substrate");
const polkadotMethods = __importStar(require("./methods"));
// Export methods of pallets included in the Polkadot, Kusama, Westend, Rococo
// and State{mint, mine} runtimes.
// Note: in the future this may also include methods defined within this package
// that do not exist in Substrate.
exports.methods = {
    balances: txwrapper_substrate_1.methods.balances,
    utility: txwrapper_substrate_1.methods.utility,
    proxy: txwrapper_substrate_1.methods.proxy,
    democracy: txwrapper_substrate_1.methods.democracy,
    session: txwrapper_substrate_1.methods.session,
    staking: txwrapper_substrate_1.methods.staking,
    system: txwrapper_substrate_1.methods.system,
    vesting: txwrapper_substrate_1.methods.vesting,
    multisig: txwrapper_substrate_1.methods.multisig,
    crowdloan: polkadotMethods.crowdloan,
    // assets is only applicable to State{mint, mine}
    assets: txwrapper_substrate_1.methods.assets,
};
// Re-export all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
__exportStar(require("@substrate/txwrapper-core"), exports);
/**
 * `ChainProperties` for networks that txwrapper-polkadot supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
const KNOWN_CHAIN_PROPERTIES = {
    kusama: {
        ss58Format: txwrapper_core_1.PolkadotSS58Format.kusama,
        tokenDecimals: 12,
        tokenSymbol: 'KSM',
    },
    polkadot: {
        ss58Format: txwrapper_core_1.PolkadotSS58Format.polkadot,
        tokenDecimals: 10,
        tokenSymbol: 'DOT',
    },
    westend: {
        ss58Format: txwrapper_core_1.PolkadotSS58Format.westend,
        tokenDecimals: 12,
        tokenSymbol: 'WND',
    },
    statemint: {
        ss58Format: txwrapper_core_1.PolkadotSS58Format.polkadot,
        tokenDecimals: 10,
        tokenSymbol: 'DOT',
    },
    statemine: {
        ss58Format: txwrapper_core_1.PolkadotSS58Format.kusama,
        tokenDecimals: 12,
        tokenSymbol: 'KSM',
    },
};
/**
 * Get a type registry for networks that txwrapper-polkadot supports.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */
function getRegistry({ specName, chainName, specVersion, metadataRpc, properties, }) {
    // The default type registry has polkadot types
    const registry = new txwrapper_core_1.TypeRegistry();
    // As of now statemine is not a supported specName in the default polkadot-js/api type registry.
    const chainNameAdjusted = chainName === 'Statemine' ? 'Statemint' : chainName;
    const specNameAdjusted = specName === 'statemine' ? 'statemint' : specName;
    return txwrapper_core_1.getRegistryBase({
        chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specNameAdjusted],
        specTypes: txwrapper_core_1.getSpecTypes(registry, chainNameAdjusted, specNameAdjusted, specVersion),
        metadataRpc,
    });
}
exports.getRegistry = getRegistry;
//# sourceMappingURL=index.js.map