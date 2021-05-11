"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyAnnounced = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 *
 * Removes any corresponding announcement(s).
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * @param args
 * @param info
 * @param options
 */
function proxyAnnounced(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'proxyAnnounced',
            pallet: 'proxy',
        },
        ...info,
    }, options);
}
exports.proxyAnnounced = proxyAnnounced;
//# sourceMappingURL=proxyAnnounced.js.map