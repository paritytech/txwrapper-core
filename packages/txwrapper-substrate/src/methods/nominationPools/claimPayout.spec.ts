import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { claimPayout } from './claimPayout';

describe('nominationPools::claimPayout', () => {
	it('should work', () => {
		const unsigned = claimPayout({}, TEST_BASE_TX_INFO, KUSAMA_TEST_OPTIONS);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x2902');
	});
});
