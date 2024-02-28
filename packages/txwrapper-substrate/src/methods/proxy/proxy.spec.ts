import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { proxy } from './proxy';

describe('proxy::proxy', () => {
	it('should work', () => {
		const unsigned = proxy(
			TEST_METHOD_ARGS.proxy.proxy,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1e00008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4801000400004aca27604ad033f7c45b1cfc23b55520826db4abb69a8a7c165461c40f330c6b0700e8764817',
		);
	});
});
