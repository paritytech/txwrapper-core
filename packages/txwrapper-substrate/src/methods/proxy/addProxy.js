"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProxy = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function addProxy(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'addProxy',
            pallet: 'proxy',
        },
        ...info,
    }, options);
}
exports.addProxy = addProxy;
//# sourceMappingURL=addProxy.js.map