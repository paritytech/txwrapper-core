import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setMetadata } from './setMetadata';

describe('nominationPools::setMetadata', () => {
	it('should work', () => {
		const unsigned = setMetadata(
			TEST_METHOD_ARGS.nominationPools.setMetadata,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x290a040000003430783030303030303030303030');
	});
});
