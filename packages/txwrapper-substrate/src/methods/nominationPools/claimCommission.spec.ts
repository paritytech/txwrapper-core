import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { claimCommission } from './claimCommission';

describe('nominationPools::claimCommission', () => {
	it('should work', () => {
		const unsigned = claimCommission(
			TEST_METHOD_ARGS.nominationPools.claimCommission,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x291404000000');
	});
});
