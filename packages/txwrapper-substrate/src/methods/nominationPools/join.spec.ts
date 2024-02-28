import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { join } from './join';

describe('nominationPools::join', () => {
	it('should work', () => {
		const unsigned = join(
			TEST_METHOD_ARGS.nominationPools.join,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x290002093d0001000000');
	});
});
