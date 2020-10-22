import {
  API_V1_17_2_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { openProxy } from './openProxy';

describe('democracy::openProxy', () => {
  it('should work', () => {
    const unsigned = openProxy(
      TEST_METHOD_ARGS.democracy.openProxy,
      TEST_BASE_TX_INFO,
      API_V1_17_2_TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x09188eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48'
    );
  });
});
