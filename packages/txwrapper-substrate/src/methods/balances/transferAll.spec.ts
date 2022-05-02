import {
	itHasCorrectBaseTxInfo,
	POLKADOT_9122_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferAll } from './transferAll';

describe('balances:transferAll', () => {
	it('should work', () => {
		const unsigned = transferAll(
			TEST_METHOD_ARGS.balances.transferAll,
			TEST_BASE_TX_INFO,
			POLKADOT_9122_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x05040096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d01'
		);
	});
});
