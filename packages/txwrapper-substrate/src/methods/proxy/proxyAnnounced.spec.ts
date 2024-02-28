import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { proxyAnnounced } from './proxyAnnounced';

describe('proxy::proxyAnnounced', () => {
	it('should work', () => {
		const unsigned = proxyAnnounced(
			TEST_METHOD_ARGS.proxy.proxyAnnounced,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1e0900d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4801000400004aca27604ad033f7c45b1cfc23b55520826db4abb69a8a7c165461c40f330c6b0700e8764817',
		);
	});
});
