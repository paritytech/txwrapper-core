"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batch = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
function batch(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'batch',
            pallet: 'utility',
        },
        ...info,
    }, options);
}
exports.batch = batch;
//# sourceMappingURL=batch.js.map