"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anonymous = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 *
 * Requires a `Signed` origin
 *
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 *
 * Fails if there are insufficient funds to pay for deposit.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function anonymous(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'anonymous',
            pallet: 'proxy',
        },
        ...info,
    }, options);
}
exports.anonymous = anonymous;
//# sourceMappingURL=anonymous.js.map