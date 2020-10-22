import {
  CC1_TEST_BASE_TX_INFO,
  CC1_TEST_OPTIONS,
  cC1TestBaseTxInfo,
  TEST_METHOD_ARGS,
} from '../../util';
import { proxy } from './proxy';

describe('proxy::proxy', () => {
  it('should work', () => {
    const unsigned = proxy(
      TEST_METHOD_ARGS.proxy.proxy,
      CC1_TEST_BASE_TX_INFO,
      CC1_TEST_OPTIONS
    );

    cC1TestBaseTxInfo(unsigned);

    expect(unsigned.method).toBe(
      '0x1c008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480100050030672121'
    );
  });
});
