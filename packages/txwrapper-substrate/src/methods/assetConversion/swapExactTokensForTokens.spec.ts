import {
	ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
	ASSET_HUB_KUSAMA_TEST_OPTIONS,
	itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { swapExactTokensForTokens } from './swapExactTokensForTokens';

describe('assetsConversion:swapExactTokensForTokens', () => {
	it('should work', () => {
		const unsigned = swapExactTokensForTokens(
			TEST_METHOD_ARGS.assetConversion.swapExactTokensForTokens,
			ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
			ASSET_HUB_KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x3803080002043205011f00000a000000000000000000000000000000e803000000000000000000000000000096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d01',
		);
	});
});
