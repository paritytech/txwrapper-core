import {
	ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
	ASSET_HUB_KUSAMA_TEST_OPTIONS,
	itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { swapTokensForExactTokens } from './swapTokensForExactTokens';

describe('assetsConversion:swapTokensForExactTokens', () => {
	it('should work', () => {
		const unsigned = swapTokensForExactTokens(
			TEST_METHOD_ARGS.assetConversion.swapTokensForExactTokens,
			ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
			ASSET_HUB_KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x3804080002043205011f00000a000000000000000000000000000000e803000000000000000000000000000096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d01',
		);
	});
});
