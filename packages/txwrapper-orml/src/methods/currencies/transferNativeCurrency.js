"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferNativeCurrency = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
function transferNativeCurrency(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'transferNativeCurrency',
            pallet: 'currencies',
        },
        ...info,
    }, options);
}
exports.transferNativeCurrency = transferNativeCurrency;
//# sourceMappingURL=transferNativeCurrency.js.map