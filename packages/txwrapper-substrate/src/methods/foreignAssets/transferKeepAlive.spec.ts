import {
	ASSET_HUB_POLKADOT_TEST_BASE_TX_INFO,
	ASSET_HUB_POLKADOT_TEST_OPTIONS,
	itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferKeepAlive } from './transferKeepAlive';

describe('foreignAssets:transferKeepAlive', () => {
	it('should work', () => {
		const unsigned = transferKeepAlive(
			TEST_METHOD_ARGS.foreignAssets.transferKeepAlive,
			ASSET_HUB_POLKADOT_TEST_BASE_TX_INFO,
			ASSET_HUB_POLKADOT_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x350902010903008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a484913',
		);
	});
});
