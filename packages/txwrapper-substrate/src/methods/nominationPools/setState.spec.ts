import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setState } from './setState';

describe('nominationPools::setState', () => {
	it('should work', () => {
		const unsigned = setState(
			TEST_METHOD_ARGS.nominationPools.setState,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x29090400000000');
	});
});
