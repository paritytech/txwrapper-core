"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const transferApproved_1 = require("./transferApproved");
describe('assets:cancelApproval', () => {
    it('should work', () => {
        const unsigned = transferApproved_1.transferApproved(test_helpers_1.TEST_METHOD_ARGS.assets.transferApproved, txwrapper_core_1.TEST_BASE_TX_INFO_V29, txwrapper_core_1.POLKADOT_29_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x221628008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d4913');
    });
});
//# sourceMappingURL=transferApproved.spec.js.map