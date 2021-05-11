"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectAnnouncement = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Remove the given announcement of a delegate and return the deposit. Made by the proxied account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function rejectAnnouncement(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'rejectAnnouncement',
            pallet: 'proxy',
        },
        ...info,
    }, options);
}
exports.rejectAnnouncement = rejectAnnouncement;
//# sourceMappingURL=rejectAnnouncement.js.map