"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rebond = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Rebond a portion of the stash scheduled to be unlocked.
 *
 * The dispatch origin must be signed by the controller, and it can be only called when
 * `EraElectionStatus` is `Closed`.
 *
 **/
function rebond(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'rebond',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.rebond = rebond;
//# sourceMappingURL=rebond.js.map