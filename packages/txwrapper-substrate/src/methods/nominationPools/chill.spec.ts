import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { chill } from './chill';

describe('nominationPools::chill', () => {
	it('should work', () => {
		const unsigned = chill(
			TEST_METHOD_ARGS.nominationPools.chill,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x290d04000000');
	});
});
