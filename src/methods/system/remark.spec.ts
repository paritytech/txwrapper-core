import {
  KUSAMA_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { remark } from './remark';

describe('system::remark', () => {
  it('should work', () => {
    const unsigned = remark(
      TEST_METHOD_ARGS.system.remark,
      TEST_BASE_TX_INFO,
      KUSAMA_TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x00011042194253');
  });
});
