"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const validate_1 = require("./validate");
describe('staking::validate', () => {
    it('should work', () => {
        const unsigned = validate_1.validate(test_helpers_1.TEST_METHOD_ARGS.staking.validate, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x080414');
    });
});
//# sourceMappingURL=validate.spec.js.map