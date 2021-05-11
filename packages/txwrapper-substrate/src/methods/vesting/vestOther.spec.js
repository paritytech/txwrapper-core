"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const vestOther_1 = require("./vestOther");
describe('vesting::vestOther', () => {
    it('should work', () => {
        const unsigned = vestOther_1.vestOther(test_helpers_1.TEST_METHOD_ARGS.vesting.vestOther, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1b0190b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22');
    });
});
//# sourceMappingURL=vestOther.spec.js.map