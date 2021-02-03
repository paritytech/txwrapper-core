import {
    POLKADOT_25_TEST_OPTIONS,
    TEST_BASE_TX_INFO,
    itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { vest } from './vest';

describe('vesting::vest', () => {
    it('should work', () => {
        const unsigned = vest(
            TEST_METHOD_ARGS.vesting.vest,
            TEST_BASE_TX_INFO,
            POLKADOT_25_TEST_OPTIONS
        );

        itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1a00');
    });
});
