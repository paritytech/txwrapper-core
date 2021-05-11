"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itDecodesSignedBalancesTransferTx = void 0;
const test_helpers_1 = require("../../test-helpers");
const __1 = require("..");
const decodeSignedTx_1 = require("./decodeSignedTx");
const test_helpers_2 = require("./test-helpers");
function itDecodesSignedBalancesTransferTx(decoded) {
    ['address', 'metadataRpc', 'nonce', 'tip'].forEach((key) => expect(decoded[key]).toBe(test_helpers_1.TEST_BASE_TX_INFO[key]));
}
exports.itDecodesSignedBalancesTransferTx = itDecodesSignedBalancesTransferTx;
describe('decodeSignedTx', () => {
    it('should decode balances::transfer', async () => {
        const unsigned = test_helpers_1.balancesTransfer(test_helpers_1.TEST_METHOD_ARGS.balances.transfer, test_helpers_1.TEST_BASE_TX_INFO, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const signingPayload = __1.construct.signingPayload(unsigned, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const signature = await test_helpers_1.signWithAlice(signingPayload);
        const signedTx = __1.construct.signedTx(unsigned, signature, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const decoded = decodeSignedTx_1.decodeSignedTx(signedTx, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        itDecodesSignedBalancesTransferTx(decoded);
        test_helpers_2.itDecodesBalancesTransferCommon(decoded);
    });
});
//# sourceMappingURL=decodeSignedTx.spec.js.map