"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asDerivative = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Send a call through an indexed pseudonym of the sender. In other words, send a call through a
 * derivative account of the signer. The signer will need to have an already existing index derived
 * account in order to succesfully execute this call.
 *
 * Each account has 2**16 possible "pseudonyms" (alternative account IDs) and these can be
 * stacked. This can be useful as a key management tool, where you need multiple distinct accounts
 * (e.g. as controllers for many staking accounts), but where it's perfectly fine to have each of
 * them controlled by the same underlying keypair.
 *
 * Derivative accounts are, for the purposes of proxy filtering considered exactly
 * the same as the oigin and are thus hampered with the origin's filters.
 *
 * NOTE: If you need to ensure that any account-based filtering is ignored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 *
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * @param args
 * @param info
 * @param options
 */
function asDerivative(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'asDerivative',
            pallet: 'utility',
        },
        ...info,
    }, options);
}
exports.asDerivative = asDerivative;
//# sourceMappingURL=asDerivative.js.map