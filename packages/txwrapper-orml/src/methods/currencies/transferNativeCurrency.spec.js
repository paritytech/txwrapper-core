"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const transferNativeCurrency_1 = require("./transferNativeCurrency");
describe('currencies::transferNativeCurrency', () => {
    it('should work', () => {
        const unsigned = transferNativeCurrency_1.transferNativeCurrency(test_helpers_1.TEST_METHOD_ARGS.currencies.transferNativeCurrency, txwrapper_core_1.TEST_BASE_TX_INFO, test_helpers_1.MANDALA_602_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0501ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4830');
    });
    it('should accept big numbers as string', () => {
        const unsigned = transferNativeCurrency_1.transferNativeCurrency({
            ...test_helpers_1.TEST_METHOD_ARGS.currencies.transferNativeCurrency,
            amount: '9007199254740996', // MAX_SAFE_INTEGER + 5
        }, txwrapper_core_1.TEST_BASE_TX_INFO, test_helpers_1.MANDALA_602_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0501ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480f04000000000020');
    });
});
//# sourceMappingURL=transferNativeCurrency.spec.js.map