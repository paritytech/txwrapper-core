"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itHasCorrectBaseTxInfo = void 0;
const constants_1 = require("./constants");
/**
 * Test helper to test that all base tx information is correctly populated.
 *
 * @param unsigned - Unsigned transaction to test
 */
function itHasCorrectBaseTxInfo(unsigned) {
    ['address', 'blockHash', 'genesisHash'].forEach((key) => expect(unsigned[key]).toBe(constants_1.TEST_BASE_TX_INFO[key]));
    expect(unsigned.blockNumber).toBe('0x0041a58e');
    expect(unsigned.era).toBe('0xeb58');
    expect(unsigned.nonce).toBe('0x00000002');
    expect(unsigned.specVersion).toBe('0x000003fb');
    expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
    expect(unsigned.transactionVersion).toBe('0x00000006');
    expect(unsigned.version).toBe(4);
}
exports.itHasCorrectBaseTxInfo = itHasCorrectBaseTxInfo;
//# sourceMappingURL=itHasCorrectBaseTxInfo.js.map