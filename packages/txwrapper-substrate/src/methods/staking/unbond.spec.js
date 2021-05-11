"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const unbond_1 = require("./unbond");
describe('staking::unbond', () => {
    it('should work', () => {
        const unsigned = unbond_1.unbond(test_helpers_1.TEST_METHOD_ARGS.staking.unbond, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x08029101');
    });
});
//# sourceMappingURL=unbond.spec.js.map