"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../test-helpers/constants");
const defineMethod_1 = require("./defineMethod");
describe('defineMethod', () => {
    it('should create correct default era', () => {
        const txBaseInfo = {
            ...constants_1.TEST_BASE_TX_INFO,
            eraPeriod: undefined,
        };
        const unsigned = defineMethod_1.defineMethod({
            ...txBaseInfo,
            method: {
                args: {},
                name: 'chill',
                pallet: 'staking',
            },
        }, constants_1.POLKADOT_25_TEST_OPTIONS);
        expect(unsigned.era).toBe('0xe500');
    });
    it('should work', () => {
        const txBaseInfo = {
            ...constants_1.TEST_BASE_TX_INFO,
            eraPeriod: 2,
        };
        const unsigned = defineMethod_1.defineMethod({
            ...txBaseInfo,
            method: {
                args: {},
                name: 'chill',
                pallet: 'staking',
            },
        }, constants_1.POLKADOT_25_TEST_OPTIONS);
        expect(unsigned.era).toBe('0x2100');
        expect(unsigned.signedExtensions).toStrictEqual([
            'CheckSpecVersion',
            'CheckTxVersion',
            'CheckGenesis',
            'CheckMortality',
            'CheckNonce',
            'CheckWeight',
            'ChargeTransactionPayment',
        ]);
        expect(unsigned.method).toBe('0x0806');
        expect(unsigned.nonce).toBe('0x00000002');
        expect(unsigned.address).toBe(constants_1.TEST_BASE_TX_INFO.address);
        expect(unsigned.blockNumber).toBe('0x0041a58e');
    });
});
//# sourceMappingURL=defineMethod.spec.js.map