"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const removeProxies_1 = require("./removeProxies");
describe('proxy::removeProxies', () => {
    it('should work', () => {
        const unsigned = removeProxies_1.removeProxies({}, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1d03');
    });
});
//# sourceMappingURL=removeProxies.spec.js.map