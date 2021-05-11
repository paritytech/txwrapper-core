"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const transferKeepAlive_1 = require("./transferKeepAlive");
describe('balances::transferKeepAlive', () => {
    it('should work', () => {
        const unsigned = transferKeepAlive_1.transferKeepAlive(test_helpers_1.TEST_METHOD_ARGS.balances.transferKeepAlive, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30');
    });
});
//# sourceMappingURL=transferKeepAllive.spec.js.map