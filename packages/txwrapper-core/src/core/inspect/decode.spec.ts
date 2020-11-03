import { core } from '../../core';
import {
	balancesTransfer,
	POLKADOT_25_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test-helpers';
import { decode } from './decode';
import { itDecodesSignedBalancesTransferTx } from './decodeSignedTx.spec';
// import { DecodedSigningPayload } from '../../types';
// import { decodeBaseTxInfo as decodeSigningBase } from './decodeSigningPayload.spec';
// // import { decodeBaseTxInfo as decodeUnsignedBase } from './decodeUnsignedTx.spec';

describe('decode', () => {
	it('should decode signedTx', async () => {
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

		const txInfo = decode(signedTx, POLKADOT_25_TEST_OPTIONS);

		itDecodesSignedBalancesTransferTx(txInfo);
	});

	// it('decodes an unsigned tx', () => {
	// 	const unsigned = balancesTransfer(
	// 		TEST_METHOD_ARGS.balances.transfer,
	// 		TEST_BASE_TX_INFO,
	// 		POLKADOT_25_TEST_OPTIONS
	// 	);
	// 	const txInfo = decode(unsigned, POLKADOT_25_TEST_OPTIONS);

	// 	decodeUnsignedBase(txInfo);
	// 	expect(txInfo.method.pallet).toBe('balances');
	// 	expect(txInfo.method.name).toBe('transfer');
	// 	expect(txInfo.method.args).toEqual(TEST_METHOD_ARGS.balances.transfer);
	// });

	//   it('should decode signing payload', (done) => {
	//     const unsigned = balancesTransfer(
	//       TEST_METHOD_ARGS.balances.transfer,
	//       TEST_BASE_TX_INFO,
	//       POLKADOT_25_TEST_OPTIONS
	//     );
	//     const signingPayload = core.create.createSigningPayload(unsigned, POLKADOT_25_TEST_OPTIONS);

	//     const txInfo = decode(
	//       signingPayload,
	//       POLKADOT_25_TEST_OPTIONS
	//     ) as DecodedSigningPayload;

	//     decodeSigningBase(txInfo);
	//     expect(txInfo.method.pallet).toBe('balances');
	//     expect(txInfo.method.name).toBe('transfer');
	//     expect(txInfo.method.args).toEqual(TEST_METHOD_ARGS.balances.transfer);

	//     done();
	//   });
});
