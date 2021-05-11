"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helpers_1 = require("../../test-helpers");
const __1 = require("..");
const getTxHash_1 = require("./getTxHash");
describe('getTxHash', () => {
    it('should work', async () => {
        const unsigned = test_helpers_1.balancesTransfer(test_helpers_1.TEST_METHOD_ARGS.balances.transfer, test_helpers_1.TEST_BASE_TX_INFO, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const signingPayload = __1.construct.signingPayload(unsigned, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const signature = await test_helpers_1.signWithAlice(signingPayload);
        const signedTx = __1.construct.signedTx(unsigned, signature, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const txHash = getTxHash_1.getTxHash(signedTx);
        expect(txHash).toBe('0xaab69a09a92afaa992d369304b58cd698db1153d48a271e7f9bf4156a9cc5b00');
    });
});
//# sourceMappingURL=getTxHash.spec.js.map