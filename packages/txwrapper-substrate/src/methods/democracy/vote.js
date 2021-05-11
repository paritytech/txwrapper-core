"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vote = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Vote in a referendum.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function vote(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'vote',
            pallet: 'democracy',
        },
        ...info,
    }, options);
}
exports.vote = vote;
//# sourceMappingURL=vote.js.map