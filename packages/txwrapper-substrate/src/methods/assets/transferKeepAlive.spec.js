"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const transferKeepAlive_1 = require("./transferKeepAlive");
describe('assets:transferKeepAlive', () => {
    it('should work', () => {
        const unsigned = transferKeepAlive_1.transferKeepAlive(test_helpers_1.TEST_METHOD_ARGS.assets.transferKeepAlive, txwrapper_core_1.TEST_BASE_TX_INFO_V29, txwrapper_core_1.POLKADOT_29_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x220628008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a484913');
    });
});
//# sourceMappingURL=transferKeepAlive.spec.js.map