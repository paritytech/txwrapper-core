"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const remark_1 = require("./remark");
describe('system::remark', () => {
    it('should work', () => {
        const unsigned = remark_1.remark(test_helpers_1.TEST_METHOD_ARGS.system.remark, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x00011042194253');
    });
});
//# sourceMappingURL=remark.spec.js.map