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
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';

describe('createSignedTx', () => {
	it('should work', async () => {
		const unsigned = balancesTransferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);
		const signingPayload = createSigningPayload(unsigned, KUSAMA_TEST_OPTIONS);
		const signature = await signWithAlice(signingPayload);

		const tx = createSignedTx(unsigned, signature, KUSAMA_TEST_OPTIONS);
		expect(tx).toBe(
			'0x31028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d006ac2635aa767cad3c73c2ba7e508b7428dc6d2aafba03e9d5602cb2715d4eedc1726d08350fef3b9cbd99193fd2849c79272bf1ba2e526caac5c99638bb3d60deb5808000004030096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30',
		);
	});

	it('should work for Astar', async () => {
		const unsigned = balancesTransfer(
			ASTAR_TEST_METHOD_ARGS.balances.transfer,
			ASTAR_TEST_BASE_TX_INFO,
			ASTAR_TEST_OPTIONS,
		);
		const signature = await signWithAliceAstar(unsigned);

		const tx = createSignedTx(unsigned, signature, ASTAR_TEST_OPTIONS);
		expect(tx).toBe(
			'0x4902840046ef637afac0ffa9ec7a7cf76c5e0148200a401e2a1efcf2c16ee1554b74a22000fff4ac96df07f429c5be356f536a794b4892ec2d5fb516e04f559b0f2548be2ce48fc01501353d244aff9b660fd086c9d1681ba47fade8194c2a4c62d6c5b50adb2a080f0000c52ebca2b11f070046ef637afac0ffa9ec7a7cf76c5e0148200a401e2a1efcf2c16ee1554b74a22030',
		);
	});
});
