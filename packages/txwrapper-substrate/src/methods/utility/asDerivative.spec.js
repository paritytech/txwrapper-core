"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const transferKeepAlive_1 = require("../balances/transferKeepAlive");
const asDerivative_1 = require("./asDerivative");
describe('utility::asDerivative', () => {
    it('should work', () => {
        const unsignedBalancesTransfer = transferKeepAlive_1.transferKeepAlive(test_helpers_1.TEST_METHOD_ARGS.balances.transferKeepAlive, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        const unsigned = asDerivative_1.asDerivative({
            index: 1,
            call: unsignedBalancesTransfer.method,
        }, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x01010100060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30');
    });
});
//# sourceMappingURL=asDerivative.spec.js.map