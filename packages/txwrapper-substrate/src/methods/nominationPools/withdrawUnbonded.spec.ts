import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { withdrawUnbonded } from './withdrawUnbonded';

describe('nominationPools::poolWithdrawUnbonded', () => {
	it('should work', () => {
		const unsigned = withdrawUnbonded(
			TEST_METHOD_ARGS.nominationPools.withdrawUnbonded,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x290500d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d02000000'
		);
	});
});
