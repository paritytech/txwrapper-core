import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { addMemo } from './addMemo';

describe('crowdloan::addMemo', () => {
	it('should work', () => {
		const unsigned = addMemo(
			TEST_METHOD_ARGS.crowdloan.addMemo,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x49060c00000020ffffffffffffffff');
	});
});
