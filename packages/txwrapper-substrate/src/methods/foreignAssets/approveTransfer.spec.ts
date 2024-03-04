import {
	ASSET_HUB_POLKADOT_TEST_BASE_TX_INFO,
	ASSET_HUB_POLKADOT_TEST_OPTIONS,
	itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { approveTransfer } from './approveTransfer';

describe('foreignAssets:approveTransfer', () => {
	it('should work', () => {
		const unsigned = approveTransfer(
			TEST_METHOD_ARGS.foreignAssets.approveTransfer,
			ASSET_HUB_POLKADOT_TEST_BASE_TX_INFO,
			ASSET_HUB_POLKADOT_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x351602010903008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a484913',
		);
	});
});
