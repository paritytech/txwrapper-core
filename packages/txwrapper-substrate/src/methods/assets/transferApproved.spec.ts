import {
	itHasCorrectBaseTxInfo,
	POLKADOT_29_TEST_OPTIONS,
	TEST_BASE_TX_INFO_V29,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferApproved } from './transferApproved';

describe('assets:cancelApproval', () => {
	it('should work', () => {
		const unsigned = transferApproved(
			TEST_METHOD_ARGS.assets.transferApproved,
			TEST_BASE_TX_INFO_V29,
			POLKADOT_29_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x221628008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d4913'
		);
	});
});
