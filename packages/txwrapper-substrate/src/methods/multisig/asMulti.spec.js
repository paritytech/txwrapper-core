"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const test_helpers_1 = require("../../test-helpers");
const transferKeepAlive_1 = require("../balances/transferKeepAlive");
const asMulti_1 = require("./asMulti");
describe('multisig::asMulti', () => {
    it('should work', () => {
        const unsigned = asMulti_1.asMulti(test_helpers_1.TEST_METHOD_ARGS.multisig.asMulti, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1e0102000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22017b00000003000000a80500306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc200f00a0be1c44839900f6ffffffffff3f01');
    });
    it('should accept another txwrapper method as a `call`', () => {
        const unsignedBalancesTransferKeepAlive = transferKeepAlive_1.transferKeepAlive(test_helpers_1.TEST_METHOD_ARGS.balances.transferKeepAlive, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        const unsignedAsMulti = asMulti_1.asMulti({
            ...test_helpers_1.TEST_METHOD_ARGS.multisig.asMulti,
            call: unsignedBalancesTransferKeepAlive.method,
        }, txwrapper_core_1.TEST_BASE_TX_INFO, txwrapper_core_1.POLKADOT_25_TEST_OPTIONS);
        txwrapper_core_1.itHasCorrectBaseTxInfo(unsignedAsMulti);
        expect(unsignedAsMulti.method).toBe('0x1e0102000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22017b000000030000008c060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d3000f6ffffffffff3f01');
    });
});
//# sourceMappingURL=asMulti.spec.js.map