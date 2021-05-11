"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Declare the desire to validate for the origin controller.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function validate(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'validate',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.validate = validate;
//# sourceMappingURL=validate.js.map