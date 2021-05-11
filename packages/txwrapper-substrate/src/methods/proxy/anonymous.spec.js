"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const anonymous_1 = require("./anonymous");
describe('proxy::anonymous', () => {
    it('should work', () => {
        const unsigned = anonymous_1.anonymous(test_helpers_1.TEST_METHOD_ARGS.proxy.anonymous, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1d04001e0000000100');
    });
});
//# sourceMappingURL=anonymous.spec.js.map