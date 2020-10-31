import {
	POLKADOT_25_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test';
import { balancesTransfer } from '../../test';
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';

describe('createSignedTx', () => {
	it('should work', async (done) => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);
		const signingPayload = createSigningPayload(
			unsigned,
			POLKADOT_25_TEST_OPTIONS
		);
		const signature = await signWithAlice(signingPayload);

		const tx = createSignedTx(
			unsigned,
			signature,
			POLKADOT_25_TEST_OPTIONS
		);
		expect(tx).toBe(
			'0x2d0284ffd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d006ef540d79b1366e0f11a7353cec80ca63531f2a67e4c10359b9ed0bee0a7d82171c73bb741b81a5fe395f20a7ccbb78aeed7c5c5404a3f0eed1f81a1af56c203eb5808000600ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);

		done();
	});
});
