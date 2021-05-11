"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfer = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Construct a balance transfer transaction offline.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function transfer(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'transfer',
            pallet: 'balances',
        },
        ...info,
    }, options);
}
exports.transfer = transfer;
//# sourceMappingURL=transfer.js.map