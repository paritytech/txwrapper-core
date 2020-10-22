import {
  KUSAMA_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { setPayee } from './setPayee';

describe('staking::setPayee', () => {
  it('should work', () => {
    const unsigned = setPayee(
      TEST_METHOD_ARGS.staking.setPayee,
      TEST_BASE_TX_INFO,
      KUSAMA_TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x070700');
  });
});
