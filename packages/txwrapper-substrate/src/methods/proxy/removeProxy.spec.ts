import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core/test-helpers';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { removeProxy } from './removeProxy';

describe('proxy::removeProxy', () => {
	it('should work', () => {
		const unsigned = removeProxy(
			TEST_METHOD_ARGS.proxy.addProxy,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1d028eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480039300000'
		);
	});
});
