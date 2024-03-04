import {
	ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
	ASSET_HUB_KUSAMA_TEST_OPTIONS,
	itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { cancelApproval } from './cancelApproval';

describe('assets:cancelApproval', () => {
	it('should work', () => {
		const unsigned = cancelApproval(
			TEST_METHOD_ARGS.assets.cancelApproval,
			ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
			ASSET_HUB_KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x321728008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48',
		);
	});
});
