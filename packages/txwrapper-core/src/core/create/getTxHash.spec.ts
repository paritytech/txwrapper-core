import { core } from '..';
import {
	balancesTransfer,
	POLKADOT_25_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test-helpers';
import { getTxHash } from './getTxHash';

describe('getTxHash', () => {
	it('should work', async (done) => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);
		const signingPayload = core.create.createSigningPayload(
			unsigned,
			POLKADOT_25_TEST_OPTIONS
		);
		const signature = await signWithAlice(signingPayload);
		const signedTx = core.create.createSignedTx(
			unsigned,
			signature,
			POLKADOT_25_TEST_OPTIONS
		);

		const txHash = getTxHash(signedTx);
		expect(txHash).toBe(
			'0xaab69a09a92afaa992d369304b58cd698db1153d48a271e7f9bf4156a9cc5b00'
		);

		done();
	});
});
