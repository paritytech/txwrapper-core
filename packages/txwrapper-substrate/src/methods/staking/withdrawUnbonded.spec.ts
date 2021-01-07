import {
    POLKADOT_25_TEST_OPTIONS,
    TEST_BASE_TX_INFO,
    itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-core';
import { TEST_METHOD_ARGS } from '../../test-helpers';
import { withdrawUnbonded } from './withdrawUnbonded';

describe('staking::withdrawUnbonded', () => {
    it('should work', () => {
        const unsigned = withdrawUnbonded(
            TEST_METHOD_ARGS.staking.withdrawUnbonded,
            TEST_BASE_TX_INFO,
            POLKADOT_25_TEST_OPTIONS
        );

        itHasCorrectBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x08030b000000');
    });
});
