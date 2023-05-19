import {
	itHasCorrectBaseTxInfo,
	STATEMINE_TEST_OPTIONS,
	STATEMINT_TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferKeepAlive } from './transferKeepAlive';

describe('assets:transferKeepAlive', () => {
	it('should work', () => {
		const unsigned = transferKeepAlive(
			TEST_METHOD_ARGS.assets.transferKeepAlive,
			STATEMINT_TEST_BASE_TX_INFO,
			STATEMINE_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x320928008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a484913'
		);
	});
});
