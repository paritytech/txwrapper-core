import {
	ASTAR_TEST_BASE_TX_INFO,
	ASTAR_TEST_METHOD_ARGS,
	ASTAR_TEST_OPTIONS,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import { encodeUnsignedTransaction } from './encodeUnsignedTx';

describe('encodeUnsignedTransaction', () => {
	it('should return the correct output', () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		const encoded = encodeUnsignedTransaction(unsigned, KUSAMA_TEST_OPTIONS);

		expect(encoded).toBe(
			'0x940404070096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);
	});

	it('should return the correct output for Astar', () => {
		const unsigned = balancesTransfer(
			ASTAR_TEST_METHOD_ARGS.balances.transfer,
			ASTAR_TEST_BASE_TX_INFO,
			ASTAR_TEST_OPTIONS
		);

		const encoded = encodeUnsignedTransaction(unsigned, ASTAR_TEST_OPTIONS);

		expect(encoded).toBe(
			'0x94041f070046ef637afac0ffa9ec7a7cf76c5e0148200a401e2a1efcf2c16ee1554b74a22030'
		);
	});
});
