import {
  POLKADOT_25_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
} from '../../test/constants';
import { defineMethod } from './defineMethod';

describe('defineMethod', () => {
  it('should create a default validity period of 5 minutes', () => {
    const txBaseInfo = {
      ...TEST_BASE_TX_INFO,
      eraPeriod: undefined,
    };
    const unsigned = defineMethod(
      {
        ...txBaseInfo,
        method: {
          args: {},
          name: 'chill',
          pallet: 'staking',
        },
      },
      POLKADOT_25_TEST_OPTIONS
    );

    expect(unsigned.era).toBe('0xe500');
    expect(unsigned).toBe({});
  });
});
