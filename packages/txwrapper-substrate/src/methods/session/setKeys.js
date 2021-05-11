"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setKeys = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Sets the session key(s) of the function caller to `key`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function setKeys(args, info, options) {
    const { keys, proof = '0x' } = args;
    return txwrapper_core_1.defineMethod({
        method: {
            args: {
                keys,
                proof,
            },
            name: 'setKeys',
            pallet: 'session',
        },
        ...info,
    }, options);
}
exports.setKeys = setKeys;
//# sourceMappingURL=setKeys.js.map