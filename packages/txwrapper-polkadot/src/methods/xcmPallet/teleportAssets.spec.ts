import {
	itHasCorrectBaseTxInfo,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { KUSAMA_9240_TEST_OPTIONS, TEST_METHOD_ARGS } from '../../test-helpers';
import { teleportAssets } from './teleportAssets';

describe('xcmPallet::teleportAssets', () => {
	it('Should work for xcm v0', () => {
		const unsigned = teleportAssets(
			TEST_METHOD_ARGS.xcmPallet.V0,
			TEST_BASE_TX_INFO,
			KUSAMA_9240_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x6301000101411f0001020066168b7e94b956ce2ba83d4a0b8226c1de7a3526139f30690c08be5daa9ebe3200040a00070010a5d4e800000000'
		);
	});

	it('Should work for xcm v1', () => {
		const unsigned = teleportAssets(
			TEST_METHOD_ARGS.xcmPallet.V1,
			TEST_BASE_TX_INFO,
			KUSAMA_9240_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x6301010001009520010001010054fabff72b8ec769b862e4e841837cd394b59910c8507ec6b753e7b89364cf600104000000000b00602225aa3f00000000'
		);
	});
});
