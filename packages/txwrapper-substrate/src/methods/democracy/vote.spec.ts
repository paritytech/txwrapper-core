import {
	itHasCorrectBaseTxInfo,
	POLKADOT_TEST_BASE_TX_INFO,
	POLKADOT_TEST_OPTIONS,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { vote } from './vote';

describe('democracy::vote', () => {
	it('should work', () => {
		const unsigned = vote(
			TEST_METHOD_ARGS.democracy.vote,
			POLKADOT_TEST_BASE_TX_INFO,
			POLKADOT_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x0e02000081d2040000000000000000000000000000',
		);
	});
});
