"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payoutStakers = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 *
 * Pay out all the stakers behind a single validator for a single era.
 *
 * Any account can call this function, even if it is not one of the stakers.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function payoutStakers(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'payoutStakers',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.payoutStakers = payoutStakers;
//# sourceMappingURL=payoutStakers.js.map