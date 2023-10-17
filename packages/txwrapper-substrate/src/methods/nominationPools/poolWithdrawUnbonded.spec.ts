import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { poolWithdrawUnbonded } from './poolWithdrawUnbonded';

describe('nominationPools::poolWithdrawUnbonded', () => {
	it('should work', () => {
		const unsigned = poolWithdrawUnbonded(
			TEST_METHOD_ARGS.nominationPools.poolWithdrawUnbonded,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x29040100000002000000');
	});
});
