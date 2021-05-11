"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const nominate_1 = require("./nominate");
describe('staking::nominate', () => {
    it('should work', () => {
        const unsigned = nominate_1.nominate(test_helpers_1.TEST_METHOD_ARGS.staking.nominate, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0805088eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22');
    });
});
//# sourceMappingURL=nominate.spec.js.map