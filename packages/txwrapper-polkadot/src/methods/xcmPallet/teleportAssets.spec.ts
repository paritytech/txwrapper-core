import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { teleportAssets } from './teleportAssets';

describe('xcmPallet::teleportAssets', () => {
	it('Should work for xcm v2', () => {
		const unsigned = teleportAssets(
			TEST_METHOD_ARGS.xcmPallet.V2,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x63010101000100010100f5d5714c084c112843aca74f8c498da06cc5a2d63153b825189baa51043b1f0b010400010000910100000000',
		);
	});

	it('Should work for xcm v3', () => {
		const unsigned = teleportAssets(
			TEST_METHOD_ARGS.xcmPallet.V3,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x63010301000300010100f5d5714c084c112843aca74f8c498da06cc5a2d63153b825189baa51043b1f0b030400010000910100000000',
		);
	});
});
