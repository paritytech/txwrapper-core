import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setPayee } from './setPayee';

describe('staking::setPayee', () => {
	it('should work', () => {
		const unsigned = setPayee(
			TEST_METHOD_ARGS.staking.setPayee,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x060700');
	});
});
