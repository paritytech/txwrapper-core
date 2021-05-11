"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asMulti = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 *
 * If there are enough, then dispatch the call.
 *
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 *
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 *
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function asMulti(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'asMulti',
            pallet: 'multisig',
        },
        ...info,
    }, options);
}
exports.asMulti = asMulti;
//# sourceMappingURL=asMulti.js.map