import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { rebond } from './rebond';

describe('staking::rebond', () => {
	it('should work', () => {
		const unsigned = rebond(
			TEST_METHOD_ARGS.staking.rebond,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x08139101');
	});
});
