import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { cancelAsMulti } from './cancelAsMulti';

describe('multisig::cancelAsMulti', () => {
	it('should work', () => {
		const unsigned = cancelAsMulti(
			TEST_METHOD_ARGS.multisig.cancelAsMulti,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1e0302000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe227b000000030000003078303530303330363732313231316435343034626439646138386530323034'
		);
	});
});
