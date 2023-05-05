import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { vote } from './vote';

describe('democracy::vote', () => {
	it('should work', () => {
		const unsigned = vote(
			TEST_METHOD_ARGS.democracy.vote,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x0d02000081d2040000000000000000000000000000'
		);
	});
});
