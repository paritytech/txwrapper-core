import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setClaimPermission } from './setClaimPermission';

describe('nominationPools::setClaimPermission', () => {
	it('should work', () => {
		const unsigned = setClaimPermission(
			TEST_METHOD_ARGS.nominationPools.setClaimPermission,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x290f00');
	});
});
