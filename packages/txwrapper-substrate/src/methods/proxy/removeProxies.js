"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProxies = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Unregister all proxy accounts for the sender.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function removeProxies(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'removeProxies',
            pallet: 'proxy',
        },
        ...info,
    }, options);
}
exports.removeProxies = removeProxies;
//# sourceMappingURL=removeProxies.js.map