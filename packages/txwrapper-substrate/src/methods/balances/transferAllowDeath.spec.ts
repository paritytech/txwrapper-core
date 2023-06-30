import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { transferAllowDeath } from './transferAllowDeath';

describe('balances::transfer_allow_death', () => {
	it('should work', () => {
		const unsigned = transferAllowDeath(
			TEST_METHOD_ARGS.balances.transferAllowDeath,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x04000096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);
	});

	it('should accept big numbers as string', () => {
		const unsigned = transferAllowDeath(
			{
				...TEST_METHOD_ARGS.balances.transferAllowDeath,
				value: '9007199254740996', // MAX_SAFE_INTEGER + 5
			},
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x04000096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d0f04000000000020'
		);
	});
});
