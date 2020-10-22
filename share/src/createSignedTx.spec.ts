import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { balances } from './methods';
import {
  KUSAMA_TEST_OPTIONS,
  signWithAlice,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
} from './util/testUtil';

describe('createSignedTx', () => {
  it('should work', async (done) => {
    const unsigned = balances.transferKeepAlive(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO,
      KUSAMA_TEST_OPTIONS
    );
    const signingPayload = createSigningPayload(unsigned, KUSAMA_TEST_OPTIONS);
    const signature = await signWithAlice(signingPayload);

    const tx = createSignedTx(unsigned, signature, KUSAMA_TEST_OPTIONS);
    expect(tx).toBe(
      '0x250284d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00954b53a4f5f9ce030d5c3255592c917fbe480dc5b074eaa1ef7e28bd035a6650b5870302e59ff7c6d74f16e4140c85cb874bb4a7cf911f802ce02ea6a5ff120deb580800060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );

    done();
  });
});
