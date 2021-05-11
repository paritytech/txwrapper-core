"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const transfer_1 = require("./transfer");
describe('balances::transfer', () => {
    it('should work', () => {
        const unsigned = transfer_1.transfer(txwrapper_core_1.TEST_METHOD_ARGS.balances.transfer, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x060096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30');
    });
    it('should accept big numbers as string', () => {
        const unsigned = transfer_1.transfer({
            ...txwrapper_core_1.TEST_METHOD_ARGS.balances.transfer,
            value: '9007199254740996', // MAX_SAFE_INTEGER + 5
        }, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x060096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d0f04000000000020');
    });
});
//# sourceMappingURL=transfer.spec.js.map