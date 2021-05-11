"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const addProxy_1 = require("./addProxy");
describe('proxy::addProxy', () => {
    it('should work', () => {
        const unsigned = addProxy_1.addProxy(test_helpers_1.TEST_METHOD_ARGS.proxy.addProxy, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1d018eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480039300000');
    });
});
//# sourceMappingURL=addProxy.spec.js.map