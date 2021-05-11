"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveAsMulti = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Register approval for a dispatch to be made from a deterministic composite account (i.e. multisig
 * account) if approved by a total of `threshold - 1` of `other_signatories`.
 *
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 *
 * NOTE: If this is the final approval, you must use `as_multi` instead.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function approveAsMulti(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'approveAsMulti',
            pallet: 'multisig',
        },
        ...info,
    }, options);
}
exports.approveAsMulti = approveAsMulti;
//# sourceMappingURL=approveAsMulti.js.map