"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const vest_1 = require("./vest");
describe('vesting::vest', () => {
    it('should work', () => {
        const unsigned = vest_1.vest(test_helpers_1.TEST_METHOD_ARGS.vesting.vest, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1b00');
    });
});
//# sourceMappingURL=vest.spec.js.map