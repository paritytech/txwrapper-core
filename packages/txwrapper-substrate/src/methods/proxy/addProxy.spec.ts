import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core/src/test-helpers';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { addProxy } from './addProxy';

describe('proxy::addProxy', () => {
	it('should work', () => {
		const unsigned = addProxy(
			TEST_METHOD_ARGS.proxy.addProxy,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1d018eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480039300000'
		);
	});
});
