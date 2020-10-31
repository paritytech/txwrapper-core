import {
	balancesTransfer,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test';
import { createSigningPayload } from './createSigningPayload';

describe('createSigningPayload', () => {
	it('should work', () => {
		const signingPayload = createSigningPayload(
			balancesTransfer(
				TEST_METHOD_ARGS.balances.transfer,
				TEST_BASE_TX_INFO,
				POLKADOT_25_TEST_OPTIONS
			),
			POLKADOT_25_TEST_OPTIONS
		);

		expect(signingPayload).toEqual(
			'0x900600ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30eb580800fb03000006000000e3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f6361fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582'
		);
	});
});
