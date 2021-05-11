"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfer = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
function transfer(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'transfer',
            pallet: 'currencies',
        },
        ...info,
    }, options);
}
exports.transfer = transfer;
//# sourceMappingURL=transfer.js.map