"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helpers_1 = require("../../test-helpers");
const createSigningPayload_1 = require("./createSigningPayload");
describe('createSigningPayload', () => {
    it('should work', () => {
        const signingPayload = createSigningPayload_1.createSigningPayload(test_helpers_1.balancesTransfer(test_helpers_1.TEST_METHOD_ARGS.balances.transfer, test_helpers_1.TEST_BASE_TX_INFO, test_helpers_1.POLKADOT_25_TEST_OPTIONS), test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        expect(signingPayload).toEqual('0x8c060096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30eb580800fb03000006000000e3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f6361fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582');
    });
});
//# sourceMappingURL=createSigningPayload.spec.js.map