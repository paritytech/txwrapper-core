import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setCommissionChangeRate } from './setCommissionChangeRate';

describe('nominationPools::setCommissionChangeRate', () => {
	it('should work', () => {
		const unsigned = setCommissionChangeRate(
			TEST_METHOD_ARGS.nominationPools.setCommissionChangeRate,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x291304000000809698000a000000');
	});
});
