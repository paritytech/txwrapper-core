"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bondExtra = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Add some extra amount from the stash's `free_balance` into
 * the balance up for staking.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function bondExtra(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'bondExtra',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.bondExtra = bondExtra;
//# sourceMappingURL=bondExtra.js.map