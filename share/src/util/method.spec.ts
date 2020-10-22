import { createMethod } from './method';
import { KUSAMA_TEST_OPTIONS, TEST_BASE_TX_INFO } from './testUtil';

describe('createMethod', () => {
  it('should create a default validity period of 5 minutes', () => {
    const txBaseInfo = {
      ...TEST_BASE_TX_INFO,
      eraPeriod: undefined,
    };
    const unsigned = createMethod(
      {
        ...txBaseInfo,
        method: {
          args: {},
          name: 'chill',
          pallet: 'staking',
        },
      },
      KUSAMA_TEST_OPTIONS
    );

    expect(unsigned.era).toBe('0xe500');
  });

  it('should be backwards-compatible with validityPeriod', () => {
    const txBaseInfo = {
      ...TEST_BASE_TX_INFO,
      eraPeriod: undefined,
      validityPeriod: 7200, // 2h
    };
    const unsigned = createMethod(
      {
        ...txBaseInfo,
        method: {
          args: {},
          name: 'chill',
          pallet: 'staking',
        },
      },
      KUSAMA_TEST_OPTIONS
    );

    expect(unsigned.era).toBe('0xea58');
  });
});
