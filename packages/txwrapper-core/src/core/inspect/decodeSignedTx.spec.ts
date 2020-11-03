import { core } from '../../core';
import {
	balancesTransfer,
	POLKADOT_25_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test-helpers';
import { DecodedSignedTx } from '../../types';
import { decodeSignedTx } from './decodeSignedTx';
import { itDecodesBalancesTransferCommon } from './test-helpers';

export function itDecodesSignedBalancesTransferTx(
	decoded: DecodedSignedTx
): void {
	(['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach((key) =>
		expect(decoded[key]).toBe(TEST_BASE_TX_INFO[key])
	);
}

describe('decodeSignedTx', () => {
	it('should decode balances::transfer', async () => {
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

		const decoded = decodeSignedTx(signedTx, POLKADOT_25_TEST_OPTIONS);

		itDecodesSignedBalancesTransferTx(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});
});
