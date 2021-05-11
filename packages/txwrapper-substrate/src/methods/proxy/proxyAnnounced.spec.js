"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const proxyAnnounced_1 = require("./proxyAnnounced");
describe('proxy::proxyAnnounced', () => {
    it('should work', () => {
        const unsigned = proxyAnnounced_1.proxyAnnounced(test_helpers_1.TEST_METHOD_ARGS.proxy.proxyAnnounced, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1d09d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480100050030672121');
    });
});
//# sourceMappingURL=proxyAnnounced.spec.js.map