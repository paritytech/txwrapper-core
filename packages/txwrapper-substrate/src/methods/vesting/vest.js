"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vest = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Unlock any vested funds of the sender account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function vest(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'vest',
            pallet: 'vesting',
        },
        ...info,
    }, options);
}
exports.vest = vest;
//# sourceMappingURL=vest.js.map