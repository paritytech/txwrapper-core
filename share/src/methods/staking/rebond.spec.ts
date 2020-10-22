import {
  CC1_TEST_BASE_TX_INFO,
  CC1_TEST_OPTIONS,
  cC1TestBaseTxInfo,
  TEST_METHOD_ARGS,
} from '../../util';
import { rebond } from './rebond';

describe('staking::rebond', () => {
  it('should work', () => {
    const unsigned = rebond(
      TEST_METHOD_ARGS.staking.rebond,
      CC1_TEST_BASE_TX_INFO,
      CC1_TEST_OPTIONS
    );

    cC1TestBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x07139101');
  });
});
