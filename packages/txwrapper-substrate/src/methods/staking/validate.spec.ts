import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { validate } from './validate';

describe('staking::validate', () => {
	it('should work', () => {
		const unsigned = validate(
			TEST_METHOD_ARGS.staking.validate,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x080414');
	});
});
