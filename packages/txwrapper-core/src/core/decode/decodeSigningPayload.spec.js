"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itDecodesSigningPayloadBalancesTransfer = void 0;
const test_helpers_1 = require("../../test-helpers");
const __1 = require("..");
const decodeSigningPayload_1 = require("./decodeSigningPayload");
const test_helpers_2 = require("./test-helpers");
function itDecodesSigningPayloadBalancesTransfer(decoded) {
    [
        'blockHash',
        'genesisHash',
        'metadataRpc',
        'nonce',
        'specVersion',
        'tip',
    ].forEach((key) => expect(decoded[key]).toBe(test_helpers_1.TEST_BASE_TX_INFO[key]));
}
exports.itDecodesSigningPayloadBalancesTransfer = itDecodesSigningPayloadBalancesTransfer;
describe('decodeSigningPayload', () => {
    it('should decode balances::transfer', () => {
        const signingPayload = __1.construct.signingPayload(test_helpers_1.balancesTransfer(test_helpers_1.TEST_METHOD_ARGS.balances.transfer, test_helpers_1.TEST_BASE_TX_INFO, test_helpers_1.POLKADOT_25_TEST_OPTIONS), test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        const decoded = decodeSigningPayload_1.decodeSigningPayload(signingPayload, test_helpers_1.POLKADOT_25_TEST_OPTIONS);
        itDecodesSigningPayloadBalancesTransfer(decoded);
        test_helpers_2.itDecodesBalancesTransferCommon(decoded);
    });
});
//# sourceMappingURL=decodeSigningPayload.spec.js.map