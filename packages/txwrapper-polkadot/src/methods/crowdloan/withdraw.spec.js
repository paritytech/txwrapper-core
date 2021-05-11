"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const withdraw_1 = require("./withdraw");
describe('crowdloan::withdraw', () => {
    it('should work', () => {
        const unsigned = withdraw_1.withdraw(test_helpers_1.TEST_METHOD_ARGS.crowdloan.withdraw, txwrapper_core_1.TEST_BASE_TX_INFO, test_helpers_1.WESTEND_50_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x2a0290b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe2230');
    });
});
//# sourceMappingURL=withdraw.spec.js.map