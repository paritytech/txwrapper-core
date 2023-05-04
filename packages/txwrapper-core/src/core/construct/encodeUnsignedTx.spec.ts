import {
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
			'0x940404000096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);
	});
});
