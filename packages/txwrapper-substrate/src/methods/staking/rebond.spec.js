"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const rebond_1 = require("./rebond");
describe('staking::rebond', () => {
    it('should work', () => {
        const unsigned = rebond_1.rebond(test_helpers_1.TEST_METHOD_ARGS.staking.rebond, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x08139101');
    });
});
//# sourceMappingURL=rebond.spec.js.map