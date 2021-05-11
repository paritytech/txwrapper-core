"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdrawUnbonded = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * If 100% of staked funds are withdrawn, cleans up staking-related
 * storage for the account and decrements the ref_count. Note that accounts
 * that set session keys must remove them before calling this, else they will
 * lose their Controller status and be unable to remove them
 * without bonding some funds again.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function withdrawUnbonded(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'withdrawUnbonded',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.withdrawUnbonded = withdrawUnbonded;
//# sourceMappingURL=withdrawUnbonded.js.map