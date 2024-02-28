import {
	itHasCorrectBaseTxInfo,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { INTERLAY_4_TEST_OPTIONS, TEST_METHOD_ARGS } from '../../test-helpers';
import { transferAll } from './transferAll';

describe('tokens::transfer', () => {
	it('should work', () => {
		const unsigned = transferAll(
			TEST_METHOD_ARGS.tokens.transferAll,
			TEST_BASE_TX_INFO,
			INTERLAY_4_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x15018eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48000201',
		);
	});
});
