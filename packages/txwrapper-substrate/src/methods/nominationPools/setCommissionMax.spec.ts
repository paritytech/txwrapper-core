import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setCommissionMax } from './setCommissionMax';

describe('nominationPools::setCommissionMax', () => {
	it('should work', () => {
		const unsigned = setCommissionMax(
			TEST_METHOD_ARGS.nominationPools.setCommissionMax,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x29120400000080969800');
	});
});
