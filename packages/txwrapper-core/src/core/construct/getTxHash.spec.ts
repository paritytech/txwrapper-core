import {
	ASTAR_TEST_BASE_TX_INFO,
	ASTAR_TEST_METHOD_ARGS,
	ASTAR_TEST_OPTIONS,
	KUSAMA_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import {
	balancesTransfer,
	balancesTransferKeepAlive,
} from '../../test-helpers';
import { construct } from '..';
import { getTxHash } from './getTxHash';

describe('getTxHash', () => {
	it('should work', async () => {
		const unsigned = balancesTransferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);
		const signingPayload = construct.signingPayload(
			unsigned,
			KUSAMA_TEST_OPTIONS,
		);
		const signature = await signWithAlice(signingPayload);
		const signedTx = construct.signedTx(
			unsigned,
			signature,
			KUSAMA_TEST_OPTIONS,
		);

		const txHash = getTxHash(signedTx);
		expect(txHash).toBe(
			'0xd1b90c86cefbce9639cf70b6b03a00947fff6a0daa53038a940a70b489fe77e6',
		);
	});

	it('should work for Astar', async () => {
		const unsigned = balancesTransfer(
			ASTAR_TEST_METHOD_ARGS.balances.transfer,
			ASTAR_TEST_BASE_TX_INFO,
			ASTAR_TEST_OPTIONS,
		);
		const signingPayload = construct.signingPayload(
			unsigned,
			ASTAR_TEST_OPTIONS,
		);
		const signature = await signWithAlice(signingPayload);
		const signedTx = construct.signedTx(
			unsigned,
			signature,
			ASTAR_TEST_OPTIONS,
		);

		const txHash = getTxHash(signedTx);
		expect(txHash).toBe(
			'0x48598a4b920b83b931777088e6d1c9bcc1466518cb1ae0faa2a29553798e2f9c',
		);
	});
});
