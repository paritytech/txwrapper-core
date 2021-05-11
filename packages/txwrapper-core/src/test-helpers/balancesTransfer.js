"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balancesTransfer = void 0;
const core_1 = require("../core");
/**
 * Construct a balance transfer transaction offline.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function balancesTransfer(args, info, options) {
    return core_1.defineMethod({
        method: {
            args,
            name: 'transfer',
            pallet: 'balances',
        },
        ...info,
    }, options);
}
exports.balancesTransfer = balancesTransfer;
//# sourceMappingURL=balancesTransfer.js.map