"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itDecodesBalancesTransferCommon = void 0;
const test_helpers_1 = require("../../../test-helpers");
/**
 * Information common to all decoded balances transfers used for testing.
 *
 * @param decoded info from a decoded tx
 */
function itDecodesBalancesTransferCommon(decoded) {
    expect(decoded.method.pallet).toBe('balances');
    expect(decoded.method.name).toBe('transfer');
    expect(decoded.method.args.dest).toEqual(test_helpers_1.TEST_METHOD_ARGS.balances.transfer.dest);
    expect(decoded.method.args.value).toEqual('12');
    // The actual period is the smallest power of 2 greater than the input
    // period.
    expect(decoded.eraPeriod).toBeGreaterThanOrEqual(test_helpers_1.TEST_BASE_TX_INFO.eraPeriod);
}
exports.itDecodesBalancesTransferCommon = itDecodesBalancesTransferCommon;
//# sourceMappingURL=itDecodesBalancesTransferCommon.js.map