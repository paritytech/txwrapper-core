"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nominate = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Construct a transaction to nominate. This must be called by the _Controller_ account.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function nominate(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'nominate',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.nominate = nominate;
//# sourceMappingURL=nominate.js.map