import {
	itHasCorrectBaseTxInfo,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import {
	TEST_METHOD_ARGS,
	WESTEND_9030_TEST_OPTIONS,
} from '../../test-helpers';
import { contribute } from './contribute';

describe('crowdloan::contribute', () => {
	it('should work', () => {
		const unsigned = contribute(
			TEST_METHOD_ARGS.crowdloan.contribute,
			TEST_BASE_TX_INFO,
			WESTEND_9030_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x40013013f6ffffffffff3f010101ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
		);
	});
});
