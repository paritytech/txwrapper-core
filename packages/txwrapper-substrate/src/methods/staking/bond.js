"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bond = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Construct a transaction to bond funds and create a Stash account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function bond(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'bond',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.bond = bond;
//# sourceMappingURL=bond.js.map