import { core } from '..';
import {
  POLKADOT_25_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
	signWithAlice,
	balancesTransfer
} from '../../test';
import { getTxHash } from './getTxHash';

describe('getTxHash', () => {
  it('should work', async (done) => {
    const unsigned = balancesTransfer(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO,
      POLKADOT_25_TEST_OPTIONS
    );
    const signingPayload = core.create.createSigningPayload(
      unsigned,
      POLKADOT_25_TEST_OPTIONS
    );
    const signature = await signWithAlice(signingPayload);
    const signedTx = core.create.createSignedTx(
      unsigned,
      signature,
      POLKADOT_25_TEST_OPTIONS
    );

    const txHash = getTxHash(signedTx);
    expect(txHash).toBe(
      '0x4ef6857ffc19ec719ca06f5c77b44a0dd7b2bb7b3632529ed77ffea1d7bb0162'
    );

    done();
  });
});
