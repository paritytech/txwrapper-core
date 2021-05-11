"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const proxy_1 = require("./proxy");
describe('proxy::proxy', () => {
    it('should work', () => {
        const unsigned = proxy_1.proxy(test_helpers_1.TEST_METHOD_ARGS.proxy.proxy, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1d008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480100050030672121');
    });
});
//# sourceMappingURL=proxy.spec.js.map