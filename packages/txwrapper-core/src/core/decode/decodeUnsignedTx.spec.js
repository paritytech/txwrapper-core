"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itDecodesUnsignedBalanceTransferTx = void 0;
const test_helpers_1 = require("../../test-helpers");
const decodeUnsignedTx_1 = require("./decodeUnsignedTx");
const test_helpers_2 = require("./test-helpers");
function itDecodesUnsignedBalanceTransferTx(decoded) {
    [
        'address',
        'blockHash',
        'blockNumber',
        'genesisHash',
        'metadataRpc',
        'nonce',
        'specVersion',
        'transactionVersion',
        'tip',
    ].forEach((key) => expect(decoded[key]).toBe(test_helpers_1.TEST_BASE_TX_INFO[key]));
}
exports.itDecodesUnsignedBalanceTransferTx = itDecodesUnsignedBalanceTransferTx;
describe('decodeUnsignedTx', () => {
    it('should decode balances::transfer', () => {
        const unsigned = test_helpers_1.balancesTransfer(test_helpers_1.TEST_METHOD_ARGS.balances.transfer, test_helpers_1.TEST_BASE_TX_INFO, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const decoded = decodeUnsignedTx_1.decodeUnsignedTx(unsigned, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        itDecodesUnsignedBalanceTransferTx(decoded);
        test_helpers_2.itDecodesBalancesTransferCommon(decoded);
    });
});
//# sourceMappingURL=decodeUnsignedTx.spec.js.map