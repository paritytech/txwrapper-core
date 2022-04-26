import {
	itHasCorrectBaseTxInfo,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import {
	TEST_METHOD_ARGS,
	WESTEND_9030_TEST_OPTIONS,
} from '../../test-helpers';
import { addMemo } from './addMemo';

describe('crowdloan::addMemo', () => {
	it('should work', () => {
		const unsigned = addMemo(
			TEST_METHOD_ARGS.crowdloan.addMemo,
			TEST_BASE_TX_INFO,
			WESTEND_9030_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x40060c00000020ffffffffffffffff');
	});
});
