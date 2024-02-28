import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { limitedTeleportAssets } from './limitedTeleportAssets';

describe('xcmPallet::limitedTeleportAssets', () => {
	it('Should work for xcm V2', () => {
		const unsigned = limitedTeleportAssets(
			Object.assign(TEST_METHOD_ARGS.xcmPallet.V2, {
				weightLimit: { Unlimited: null },
			}),
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x63090101000100010100f5d5714c084c112843aca74f8c498da06cc5a2d63153b825189baa51043b1f0b01040001000091010000000000',
		);
	});
	it('Should work with a real weightLimit for xcm V2', () => {
		const unsigned = limitedTeleportAssets(
			Object.assign(TEST_METHOD_ARGS.xcmPallet.V2, {
				weightLimit: {
					Limited: { refTime: '10000000', proofSize: '100000000' },
				},
			}),
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x63090101000100010100f5d5714c084c112843aca74f8c498da06cc5a2d63153b825189baa51043b1f0b01040001000091010000000001025a62020284d717',
		);
	});
	it('Should work for xcm V3', () => {
		const unsigned = limitedTeleportAssets(
			Object.assign(TEST_METHOD_ARGS.xcmPallet.V3, {
				weightLimit: { Unlimited: null },
			}),
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x63090301000300010100f5d5714c084c112843aca74f8c498da06cc5a2d63153b825189baa51043b1f0b03040001000091010000000000',
		);
	});
	it('Should work with a real weightLimit for xcm V3', () => {
		const unsigned = limitedTeleportAssets(
			Object.assign(TEST_METHOD_ARGS.xcmPallet.V3, {
				weightLimit: {
					Limited: { refTime: '10000000', proofSize: '100000000' },
				},
			}),
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x63090301000300010100f5d5714c084c112843aca74f8c498da06cc5a2d63153b825189baa51043b1f0b03040001000091010000000001025a62020284d717',
		);
	});
});
