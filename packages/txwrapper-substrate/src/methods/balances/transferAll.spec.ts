import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferAll } from './transferAll';

describe('balances:transferAll', () => {
	it('should work', () => {
		const unsigned = transferAll(
			TEST_METHOD_ARGS.balances.transferAll,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x04040096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d01',
		);
	});
});
