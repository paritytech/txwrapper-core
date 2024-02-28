import {
	itHasCorrectBaseTxInfo,
	WESTEND_TEST_BASE_TX_INFO,
	WESTEND_TEST_OPTIONS,
} from '@substrate/txwrapper-dev';

import { setController } from './setController';

describe('staking::setController', () => {
	it('should work', () => {
		const unsigned = setController(
			{},
			WESTEND_TEST_BASE_TX_INFO,
			WESTEND_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x0608');
	});
});
