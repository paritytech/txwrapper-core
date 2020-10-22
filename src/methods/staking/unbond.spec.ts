import {
  KUSAMA_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { unbond } from './unbond';

describe('staking::unbond', () => {
  it('should work', () => {
    const unsigned = unbond(
      TEST_METHOD_ARGS.staking.unbond,
      TEST_BASE_TX_INFO,
      KUSAMA_TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x07029101');
  });
});
