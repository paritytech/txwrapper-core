"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chill = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Declare the desire to cease validating or nominating. Does not unbond funds.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function chill(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'chill',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.chill = chill;
//# sourceMappingURL=chill.js.map