import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { bondExtra } from './bondExtra';

describe('staking::bondExtra', () => {
	it('should encode', () => {
		const unsigned = bondExtra(
			TEST_METHOD_ARGS.staking.bondExtra,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x06019101');
	});
});
