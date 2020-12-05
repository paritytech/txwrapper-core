import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core/test-helpers';

import { removeProxies } from './removeProxies';

describe('proxy::removeProxies', () => {
	it('should work', () => {
		const unsigned = removeProxies(
			{},
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x1d03');
	});
});
