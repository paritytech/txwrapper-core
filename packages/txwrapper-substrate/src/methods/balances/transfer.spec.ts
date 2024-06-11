import {
	ASTAR_TEST_BASE_TX_INFO,
	ASTAR_TEST_METHOD_ARGS,
	ASTAR_TEST_OPTIONS,
	itHasCorrectBaseTxInfoForAstar,
} from '@substrate/txwrapper-dev';

import { transfer } from './transfer';

describe('balances::transferKeepAlive', () => {
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
