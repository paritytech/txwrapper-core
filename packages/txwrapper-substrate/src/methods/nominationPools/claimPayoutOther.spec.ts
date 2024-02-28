import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { claimPayoutOther } from './claimPayoutOther';

describe('nominationPools::claimPayoutOther', () => {
	it('should work', () => {
		const unsigned = claimPayoutOther(
			TEST_METHOD_ARGS.nominationPools.claimPayoutOther,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x2910d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d',
		);
	});
});
