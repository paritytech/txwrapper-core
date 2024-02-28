import {
	ASTAR_TEST_BASE_TX_INFO,
	ASTAR_TEST_METHOD_ARGS,
	ASTAR_TEST_OPTIONS,
	itHasCorrectBaseTxInfo,
	itHasCorrectBaseTxInfoForAstar,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { transfer } from './transfer';

describe('balances::transfer', () => {
	it('should work', () => {
		const unsigned = transfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x04070096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30',
		);
	});

	it('should accept big numbers as string', () => {
		const unsigned = transfer(
			{
				...TEST_METHOD_ARGS.balances.transfer,
				value: '9007199254740996', // MAX_SAFE_INTEGER + 5
			},
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x04070096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d0f04000000000020',
		);
	});

	it('should work for Astar', () => {
		const unsigned = transfer(
			ASTAR_TEST_METHOD_ARGS.balances.transfer,
			ASTAR_TEST_BASE_TX_INFO,
			ASTAR_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfoForAstar(unsigned);

		expect(unsigned.method).toBe(
			'0x1f070046ef637afac0ffa9ec7a7cf76c5e0148200a401e2a1efcf2c16ee1554b74a22030',
		);
	});
});
