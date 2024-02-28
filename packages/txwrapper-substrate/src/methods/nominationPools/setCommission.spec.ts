import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setCommission } from './setCommission';

describe('nominationPools::setCommission', () => {
	it('should work', () => {
		const unsigned = setCommission(
			TEST_METHOD_ARGS.nominationPools.setCommission,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x2911040000000100ca9a3bd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d',
		);
	});
});
