import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { vestOther } from './vestOther';

describe('vesting::vestOther', () => {
	it('should work', () => {
		const unsigned = vestOther(
			TEST_METHOD_ARGS.vesting.vestOther,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x1b0190b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22'
		);
	});
});
