"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const payoutStakers_1 = require("./payoutStakers");
describe('staking::payoutStakers', () => {
    it('should work', () => {
        const unsigned = payoutStakers_1.payoutStakers(test_helpers_1.TEST_METHOD_ARGS.staking.payoutStakers, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0812d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d64000000');
    });
});
//# sourceMappingURL=payoutStakers.spec.js.map