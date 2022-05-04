import {
	itHasCorrectBaseTxInfo,
	POLKADOT_29_TEST_OPTIONS,
	TEST_BASE_TX_INFO_V29,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferKeepAlive } from './transferKeepAlive';

describe('assets:transferKeepAlive', () => {
	it('should work', () => {
		const unsigned = transferKeepAlive(
			TEST_METHOD_ARGS.assets.transferKeepAlive,
			TEST_BASE_TX_INFO_V29,
			POLKADOT_29_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x220628008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a484913'
		);
	});
});
