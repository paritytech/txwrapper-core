import {
	ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
	ASSET_HUB_KUSAMA_TEST_OPTIONS,
	itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transfer } from './transfer';

describe('poolAssets:transfer', () => {
	it('should work', () => {
		const unsigned = transfer(
			TEST_METHOD_ARGS.poolAssets.transfer,
			ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
			ASSET_HUB_KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x370804000000008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a484913',
		);
	});
});
