"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unbond = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Construct a transaction to unbond funds from a Stash account. This must be
 * called by the _Controller_ account.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function unbond(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'unbond',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.unbond = unbond;
//# sourceMappingURL=unbond.js.map