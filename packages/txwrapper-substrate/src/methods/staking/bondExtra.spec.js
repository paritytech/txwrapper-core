"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const bondExtra_1 = require("./bondExtra");
describe('staking::bondExtra', () => {
    it('should encode', () => {
        const unsigned = bondExtra_1.bondExtra(test_helpers_1.TEST_METHOD_ARGS.staking.bondExtra, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x08019101');
    });
});
//# sourceMappingURL=bondExtra.spec.js.map