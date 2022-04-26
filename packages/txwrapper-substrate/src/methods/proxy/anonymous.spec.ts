import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { anonymous } from './anonymous';

describe('proxy::anonymous', () => {
	it('should work', () => {
		const unsigned = anonymous(
			TEST_METHOD_ARGS.proxy.anonymous,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x1d04001e0000000100');
	});
});
