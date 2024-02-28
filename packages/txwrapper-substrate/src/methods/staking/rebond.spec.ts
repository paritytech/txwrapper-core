import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { rebond } from './rebond';

describe('staking::rebond', () => {
	it('should work', () => {
		const unsigned = rebond(
			TEST_METHOD_ARGS.staking.rebond,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x06139101');
	});
});
