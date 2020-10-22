import {
  CC1_TEST_BASE_TX_INFO,
  CC1_TEST_OPTIONS,
  cC1TestBaseTxInfo,
  TEST_METHOD_ARGS,
} from '../../util';
import { removeProxies } from './removeProxies';

describe('proxy::removeProxy', () => {
  it('should work', () => {
    const unsigned = removeProxies(
      TEST_METHOD_ARGS.proxy.removeProxies,
      CC1_TEST_BASE_TX_INFO,
      CC1_TEST_OPTIONS
    );

    cC1TestBaseTxInfo(unsigned);

    expect(unsigned.method).toBe('0x1c03');
  });
});
