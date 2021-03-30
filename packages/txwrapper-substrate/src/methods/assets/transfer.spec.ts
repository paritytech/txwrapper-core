import {
	itHasCorrectBaseTxInfo,
	POLKADOT_29_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transfer } from './transfer';

describe('assets:transfer', () => {
	it('should work', () => {
		const unsigned = transfer(
			TEST_METHOD_ARGS.assets.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_29_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x220528008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a484913'
		);
	});
});
