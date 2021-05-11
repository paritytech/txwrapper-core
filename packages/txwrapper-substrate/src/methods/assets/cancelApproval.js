"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelApproval = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function cancelApproval(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'cancelApproval',
            pallet: 'assets',
        },
        ...info,
    }, options);
}
exports.cancelApproval = cancelApproval;
//# sourceMappingURL=cancelApproval.js.map