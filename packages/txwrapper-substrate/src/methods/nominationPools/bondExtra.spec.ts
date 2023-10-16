import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { bondExtra } from './bondExtra';

describe('nominationPools::bondExtra', () => {
	it('should work', () => {
		const unsigned = bondExtra(
			TEST_METHOD_ARGS.nominationPools.bondExtra,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x29010040420f00000000000000000000000000');
	});
});
