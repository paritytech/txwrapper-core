"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPayee = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * (Re-)set the payment target for staking rewards.
 *
 * Comes into effect at the beginning of the next era.
 *
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function setPayee(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'setPayee',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.setPayee = setPayee;
//# sourceMappingURL=setPayee.js.map