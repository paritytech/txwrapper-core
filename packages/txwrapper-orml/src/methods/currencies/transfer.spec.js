"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const transfer_1 = require("./transfer");
describe('currencies::transfer', () => {
    it('should work', () => {
        const unsigned = transfer_1.transfer(test_helpers_1.TEST_METHOD_ARGS.currencies.transfer, txwrapper_core_1.TEST_BASE_TX_INFO, test_helpers_1.MANDALA_602_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0500ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48000030');
    });
    it('should accept big numbers as string', () => {
        const unsigned = transfer_1.transfer({
            ...test_helpers_1.TEST_METHOD_ARGS.currencies.transfer,
            amount: '9007199254740996', // MAX_SAFE_INTEGER + 5
        }, txwrapper_core_1.TEST_BASE_TX_INFO, test_helpers_1.MANDALA_602_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0500ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800000f04000000000020');
    });
});
//# sourceMappingURL=transfer.spec.js.map