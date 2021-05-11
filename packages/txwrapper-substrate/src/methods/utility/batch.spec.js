"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const transferKeepAlive_1 = require("../balances/transferKeepAlive");
const batch_1 = require("./batch");
describe('utility::batch', () => {
    it('should work', () => {
        const unsignedBalancesTransferKeepAlive = transferKeepAlive_1.transferKeepAlive(test_helpers_1.TEST_METHOD_ARGS.balances.transferKeepAlive, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        const unsignedBatch = batch_1.batch({
            calls: [unsignedBalancesTransferKeepAlive.method],
        }, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsignedBatch);
        expect(unsignedBatch.method).toBe('0x010004060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30');
    });
});
//# sourceMappingURL=batch.spec.js.map