import {
  DOT_23_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { addProxy } from './addProxy';

describe('proxy::addProxy', () => {
  it('should work', () => {
    const unsigned = addProxy(
      TEST_METHOD_ARGS.proxy.addProxy,
      TEST_BASE_TX_INFO,
      DOT_23_TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);

    expect(unsigned.method).toBe(
      '0x1d018eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480039300000'
    );
  });
});
