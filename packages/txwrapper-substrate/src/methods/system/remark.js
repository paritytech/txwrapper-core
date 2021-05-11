"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remark = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Make some on-chain remark.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function remark(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'remark',
            pallet: 'system',
        },
        ...info,
    }, options);
}
exports.remark = remark;
//# sourceMappingURL=remark.js.map