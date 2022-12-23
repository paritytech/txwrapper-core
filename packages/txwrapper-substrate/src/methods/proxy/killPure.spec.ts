import {
	itHasCorrectBaseTxInfo,
	POLKADOT_9350_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { killPure } from './killPure';

describe('proxy::killPure', () => {
	it('should work', () => {
		const unsigned = killPure(
			TEST_METHOD_ARGS.proxy.killPure,
			TEST_BASE_TX_INFO,
			POLKADOT_9350_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1d05008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800000002093d0000'
		);
	});
});
