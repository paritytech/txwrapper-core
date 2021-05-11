"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helpers_1 = require("../../test-helpers");
const test_helpers_2 = require("../../test-helpers");
const createSignedTx_1 = require("./createSignedTx");
const createSigningPayload_1 = require("./createSigningPayload");
describe('createSignedTx', () => {
    it('should work', async (done) => {
        const unsigned = test_helpers_2.balancesTransfer(test_helpers_1.TEST_METHOD_ARGS.balances.transfer, test_helpers_1.TEST_BASE_TX_INFO, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const signingPayload = createSigningPayload_1.createSigningPayload(unsigned, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const signature = await test_helpers_1.signWithAlice(signingPayload);
        const tx = createSignedTx_1.createSignedTx(unsigned, signature, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        expect(tx).toBe('0x250284d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00483ff9e9dd1a0473bd47f359732f3c0c61a4c7753ffecbba785213eee19acdab289febd634144d70e1b50b0b77b0394103bb5e13b0945c8b366c808069de130ceb580800060096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30');
        done();
    });
});
//# sourceMappingURL=createSignedTx.spec.js.map