"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setController = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * (Re-)set the controller of a stash. Comes into effect at the beginning of the next era.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function setController(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'setController',
            pallet: 'staking',
        },
        ...info,
    }, options);
}
exports.setController = setController;
//# sourceMappingURL=setController.js.map