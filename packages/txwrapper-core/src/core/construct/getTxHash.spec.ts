import {
	KUSAMA_TEST_OPTIONS,
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
			KUSAMA_TEST_OPTIONS
		);
		const signingPayload = construct.signingPayload(
			unsigned,
			KUSAMA_TEST_OPTIONS
		);
		const signature = await signWithAlice(signingPayload);
		const signedTx = construct.signedTx(
			unsigned,
			signature,
			KUSAMA_TEST_OPTIONS
		);

		const txHash = getTxHash(signedTx);
		expect(txHash).toBe(
			'0x11299badfd660c00d4845ee3eb2be8c4a0185f032819a6124022e801e2544690'
		);
	});
});
