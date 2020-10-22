import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import { balances } from '../methods';
import {
  KUSAMA_TEST_OPTIONS,
  signWithAlice,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
} from '../util';
import { decode } from './decode';
import { decodeBaseTxInfo as decodeSignedBase } from './decodeSignedTx.spec';
import { DecodedSigningPayload } from './decodeSigningPayload';
import { decodeBaseTxInfo as decodeSigningBase } from './decodeSigningPayload.spec';
import { decodeBaseTxInfo as decodeUnsignedBase } from './decodeUnsignedTx.spec';

describe('decode', () => {
  it('should decode signedTx', async (done) => {
    const unsigned = balances.transfer(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO,
      KUSAMA_TEST_OPTIONS
    );
    const signingPayload = createSigningPayload(unsigned, KUSAMA_TEST_OPTIONS);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature, KUSAMA_TEST_OPTIONS);

    const txInfo = decode(signedTx, KUSAMA_TEST_OPTIONS);

    decodeSignedBase(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_METHOD_ARGS.balances.transfer);

    done();
  });

  it('decode unsigned tx', () => {
    const unsigned = balances.transfer(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO,
      KUSAMA_TEST_OPTIONS
    );
    const txInfo = decode(unsigned, KUSAMA_TEST_OPTIONS);

    decodeUnsignedBase(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_METHOD_ARGS.balances.transfer);
  });

  it('should decode signing payload', (done) => {
    const unsigned = balances.transfer(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO,
      KUSAMA_TEST_OPTIONS
    );
    const signingPayload = createSigningPayload(unsigned, KUSAMA_TEST_OPTIONS);

    const txInfo = decode(
      signingPayload,
      KUSAMA_TEST_OPTIONS
    ) as DecodedSigningPayload;

    decodeSigningBase(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_METHOD_ARGS.balances.transfer);

    done();
  });
});
