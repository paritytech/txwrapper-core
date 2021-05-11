"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const cancelApproval_1 = require("./cancelApproval");
describe('assets:cancelApproval', () => {
    it('should work', () => {
        const unsigned = cancelApproval_1.cancelApproval(test_helpers_1.TEST_METHOD_ARGS.assets.cancelApproval, txwrapper_core_1.TEST_BASE_TX_INFO_V29, txwrapper_core_1.POLKADOT_29_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x221428008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48');
    });
});
//# sourceMappingURL=cancelApproval.spec.js.map