"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const approveAsMulti_1 = require("./approveAsMulti");
describe('multisig::approveAsMulti', () => {
    it('should work', () => {
        const unsigned = approveAsMulti_1.approveAsMulti(test_helpers_1.TEST_METHOD_ARGS.multisig.approveAsMulti, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1e0202000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22017b000000030000003078303530303330363732313231316435343034626439646138386530323034f6ffffffffff3f01');
    });
});
//# sourceMappingURL=approveAsMulti.spec.js.map