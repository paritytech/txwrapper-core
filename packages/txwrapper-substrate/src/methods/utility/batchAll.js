"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchAll = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls fail.
 *
 * May be called from any origin.
 *
 * If origin is root then calls are dispatch without checking origin filter.
 * (This includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 * @param args
 * @param info
 * @param options
 */
function batchAll(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'batchAll',
            pallet: 'utility',
        },
        ...info,
    }, options);
}
exports.batchAll = batchAll;
//# sourceMappingURL=batchAll.js.map