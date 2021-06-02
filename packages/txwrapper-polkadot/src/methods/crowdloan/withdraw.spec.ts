import {
	itHasCorrectBaseTxInfo,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import { TEST_METHOD_ARGS, WESTEND_9030_TEST_OPTIONS } from '../../test-helpers';
import { withdraw } from './withdraw';

describe('crowdloan::withdraw', () => {
	it('should work', () => {
		const unsigned = withdraw(
			TEST_METHOD_ARGS.crowdloan.withdraw,
			TEST_BASE_TX_INFO,
			WESTEND_9030_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x400290b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe2230'
		);
	});
});
