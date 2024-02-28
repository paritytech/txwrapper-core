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
	itDecodesBalancesTransferAstar,
} from '../../test-helpers';
import { itDecodesBalancesTransferCommon } from '../../test-helpers';
import { DecodedSignedTx } from '../../types';
import { construct } from '..';
import { decodeSignedTx } from './decodeSignedTx';

export function itDecodesSignedBalancesTransferTx(
	decoded: DecodedSignedTx,
): void {
	(['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach((key) =>
		expect(decoded[key]).toBe(TEST_BASE_TX_INFO[key]),
	);
}

export function itDecodesSignedBalancesTransferTxAstar(
	decoded: DecodedSignedTx,
): void {
	(['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach((key) =>
		expect(decoded[key]).toBe(ASTAR_TEST_BASE_TX_INFO[key]),
	);
}

describe('decodeSignedTx', () => {
	it('should decode balances::transfer', async () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
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

		const decoded = decodeSignedTx(signedTx, KUSAMA_TEST_OPTIONS);

		itDecodesSignedBalancesTransferTx(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});

	it('should decode balances::transfer for Astar', async () => {
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

		const decoded = decodeSignedTx(signedTx, ASTAR_TEST_OPTIONS);

		itDecodesSignedBalancesTransferTxAstar(decoded);

		itDecodesBalancesTransferAstar(decoded);
	});
});
