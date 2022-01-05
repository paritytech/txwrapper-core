import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { killAnonymous } from './killAnonymous';

describe('proxy::killAnonymous', () => {
	it('should work', () => {
		const unsigned = killAnonymous(
			TEST_METHOD_ARGS.proxy.killAnonymous,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1d058eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800000002093d0000'
		);
	});
});
