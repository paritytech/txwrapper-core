import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { getTxHash } from './getTxHash';
import { balances } from './methods';
import {
  KUSAMA_TEST_OPTIONS,
  signWithAlice,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
} from './util/testUtil';

describe('getTxHash', () => {
  it('should work', async (done) => {
    const unsigned = balances.transferKeepAlive(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO,
      KUSAMA_TEST_OPTIONS
    );
    const signingPayload = createSigningPayload(unsigned, KUSAMA_TEST_OPTIONS);
    const signature = await signWithAlice(signingPayload);
    const signedTx = createSignedTx(unsigned, signature, KUSAMA_TEST_OPTIONS);

    const txHash = getTxHash(signedTx);
    expect(txHash).toBe(
      '0x4ef6857ffc19ec719ca06f5c77b44a0dd7b2bb7b3632529ed77ffea1d7bb0162'
    );

    done();
  });
});
