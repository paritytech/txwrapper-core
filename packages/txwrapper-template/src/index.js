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
exports.knownChainProperties = exports.getRegistry = exports.methods = void 0;
const txwrapper_substrate_1 = require("@substrate/txwrapper-substrate");
// Export methods of pallets included in your chain's runtime.
// Note: you may also want to create methods for pallets specifc to your chain. In that case
// consult the CHAIN_BUILDER.md guide.
exports.methods = {
    balances: txwrapper_substrate_1.methods.balances,
    utility: txwrapper_substrate_1.methods.utility,
    proxy: txwrapper_substrate_1.methods.proxy,
};
// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
__exportStar(require("@substrate/txwrapper-core"), exports);
// Re-export support getRegistry, which has support for chain types from @polkadot/apps-config
var txwrapper_registry_1 = require("@substrate/txwrapper-registry");
Object.defineProperty(exports, "getRegistry", { enumerable: true, get: function () { return txwrapper_registry_1.getRegistry; } });
Object.defineProperty(exports, "knownChainProperties", { enumerable: true, get: function () { return txwrapper_registry_1.knownChainProperties; } });
//# sourceMappingURL=index.js.map