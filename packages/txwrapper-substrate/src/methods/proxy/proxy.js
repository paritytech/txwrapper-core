"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxy = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Dispatch the given `call` from an account for which the sender is authorized.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function proxy(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'proxy',
            pallet: 'proxy',
        },
        ...info,
    }, options);
}
exports.proxy = proxy;
//# sourceMappingURL=proxy.js.map