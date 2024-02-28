import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { cancelAsMulti } from './cancelAsMulti';

describe('multisig::cancelAsMulti', () => {
	it('should work', () => {
		const unsigned = cancelAsMulti(
			TEST_METHOD_ARGS.multisig.cancelAsMulti,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1f0302000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe227b00000003000000804b66bc425a85fecc2a575b797dc043618ff5b8fb189a2ccc9d04148024742a',
		);
	});
});
