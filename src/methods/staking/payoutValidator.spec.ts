import {
  API_V1_17_2_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { payoutValidator } from './payoutValidator';

describe('staking::payoutValidator', () => {
  it('should work', () => {
    const unsigned = payoutValidator(
      TEST_METHOD_ARGS.staking.payoutValidator,
      TEST_BASE_TX_INFO,
      API_V1_17_2_TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x071164000000');
  });
});
