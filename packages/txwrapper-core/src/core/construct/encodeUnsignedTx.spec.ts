import {
	balancesTransfer,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test-helpers';
import { encodeUnsignedTransaction } from './encodeUnsignedTx';

describe('decodeEncodedUnsignedTx', () => {
	it('should return the correct output', () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		const encoded = encodeUnsignedTransaction(
			unsigned,
			POLKADOT_25_TEST_OPTIONS
		);

		expect(encoded).toBe(
			'0x9004060096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);
	});
});
