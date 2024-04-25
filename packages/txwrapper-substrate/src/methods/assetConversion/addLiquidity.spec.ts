import {
	ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
	ASSET_HUB_KUSAMA_TEST_OPTIONS,
	itHasCorrectBaseTxInfo,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { addLiquidity } from './addLiquidity';

describe('assetsConversion:addLiquidity', () => {
	it('should work', () => {
		const unsigned = addLiquidity(
			TEST_METHOD_ARGS.assetConversion.addLiquidity,
			ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO,
			ASSET_HUB_KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x38010002043205011f000040420f0000000000000000000000000080969800000000000000000000000000e8030000000000000000000000000000e803000000000000000000000000000096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d',
		);
	});
});
