import {
	ASTAR_TEST_BASE_TX_INFO,
	ASTAR_TEST_METHOD_ARGS,
	ASTAR_TEST_OPTIONS,
	KUSAMA_TEST_OPTIONS,
	signWithAlice,
	signWithAliceAstar,
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
		const signature = await signWithAliceAstar(signingPayload);
		const signedTx = construct.signedTx(
			unsigned,
			signature,
			ASTAR_TEST_OPTIONS,
		);

		const txHash = getTxHash(signedTx);
		expect(txHash).toBe(
			'0x1fc108525d6569889d53cbc092cba9c7ad0f59d668c60eff3447c774815d0485',
		);
	});
});
