"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveTransfer = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Approve an amount of asset for transfer by a delegated third-party account.
 *
 * NOTE: The signing account does not need to own `amount` of assets at the point of
 * making this call.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function approveTransfer(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'approveTransfer',
            pallet: 'assets',
        },
        ...info,
    }, options);
}
exports.approveTransfer = approveTransfer;
//# sourceMappingURL=approveTransfer.js.map