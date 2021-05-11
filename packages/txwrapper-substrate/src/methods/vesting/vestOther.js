"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vestOther = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Unlock any vested funds of a `target` account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function vestOther(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'vestOther',
            pallet: 'vesting',
        },
        ...info,
    }, options);
}
exports.vestOther = vestOther;
//# sourceMappingURL=vestOther.js.map