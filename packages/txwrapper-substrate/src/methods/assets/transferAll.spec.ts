import {
	ASSET_HUB_WESTEND_TEST_BASE_TX_INFO,
	ASSET_HUB_WESTEND_TEST_OPTIONS,
	itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferAll } from './transferAll';

describe('assets:transferAll', () => {
	it('should work', () => {
		const unsigned = transferAll(
			TEST_METHOD_ARGS.assets.transferAll,
			ASSET_HUB_WESTEND_TEST_BASE_TX_INFO,
			ASSET_HUB_WESTEND_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x322028008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4801',
		);
	});
});
