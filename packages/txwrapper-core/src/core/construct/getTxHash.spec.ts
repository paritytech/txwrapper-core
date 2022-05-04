import {
	POLKADOT_25_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import { construct } from '..';
import { getTxHash } from './getTxHash';

describe('getTxHash', () => {
	it('should work', async () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);
		const signingPayload = construct.signingPayload(
			unsigned,
			POLKADOT_25_TEST_OPTIONS
		);
		const signature = await signWithAlice(signingPayload);
		const signedTx = construct.signedTx(
			unsigned,
			signature,
			POLKADOT_25_TEST_OPTIONS
		);

		const txHash = getTxHash(signedTx);
		expect(txHash).toBe(
			'0xaab69a09a92afaa992d369304b58cd698db1153d48a271e7f9bf4156a9cc5b00'
		);
	});
});
