import {
	ASTAR_TEST_BASE_TX_INFO,
	ASTAR_TEST_METHOD_ARGS,
	ASTAR_TEST_OPTIONS,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import {
	itDecodesBalancesTransferAstar,
	itDecodesBalancesTransferCommon,
} from '../../test-helpers';
import { DecodedSigningPayload } from '../../types';
import { construct } from '..';
import { decodeSigningPayload } from './decodeSigningPayload';

export function itDecodesSigningPayloadBalancesTransfer(
	decoded: DecodedSigningPayload
): void {
	(
		[
			'blockHash',
			'genesisHash',
			'metadataRpc',
			'nonce',
			'specVersion',
			'tip',
		] as const
	).forEach((key) => expect(decoded[key]).toBe(TEST_BASE_TX_INFO[key]));
}

export function itDecodesSigningPayloadBalancesTransferAstar(
	decoded: DecodedSigningPayload
): void {
	(
		[
			'blockHash',
			'genesisHash',
			'metadataRpc',
			'nonce',
			'specVersion',
			'tip',
		] as const
	).forEach((key) => expect(decoded[key]).toBe(ASTAR_TEST_BASE_TX_INFO[key]));
}

describe('decodeSigningPayload', () => {
	it('should decode balances::transfer', () => {
		const signingPayload = construct.signingPayload(
			balancesTransfer(
				TEST_METHOD_ARGS.balances.transfer,
				TEST_BASE_TX_INFO,
				KUSAMA_TEST_OPTIONS
			),
			KUSAMA_TEST_OPTIONS
		);

		const decoded = decodeSigningPayload(signingPayload, KUSAMA_TEST_OPTIONS);

		itDecodesSigningPayloadBalancesTransfer(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});

	it('should decode balances::transfer with an immortal era', () => {
		const signingPayload = construct.signingPayload(
			balancesTransfer(
				TEST_METHOD_ARGS.balances.transfer,
				TEST_BASE_TX_INFO,
				Object.assign({}, KUSAMA_TEST_OPTIONS, { isImmortalEra: true })
			),
			KUSAMA_TEST_OPTIONS
		);

		const decoded = decodeSigningPayload(signingPayload, KUSAMA_TEST_OPTIONS);

		expect(decoded.eraPeriod).toBe(0);
	});

	it('should decode balances::transfer for Astar', () => {
		const signingPayload = construct.signingPayload(
			balancesTransfer(
				ASTAR_TEST_METHOD_ARGS.balances.transfer,
				ASTAR_TEST_BASE_TX_INFO,
				ASTAR_TEST_OPTIONS
			),
			ASTAR_TEST_OPTIONS
		);

		const decoded = decodeSigningPayload(signingPayload, ASTAR_TEST_OPTIONS);

		itDecodesSigningPayloadBalancesTransferAstar(decoded);

		itDecodesBalancesTransferAstar(decoded);
	});

	it('should decode balances::transfer with an immortal era for Astar', () => {
		const signingPayload = construct.signingPayload(
			balancesTransfer(
				ASTAR_TEST_METHOD_ARGS.balances.transfer,
				ASTAR_TEST_BASE_TX_INFO,
				Object.assign({}, ASTAR_TEST_OPTIONS, { isImmortalEra: true })
			),
			ASTAR_TEST_OPTIONS
		);

		const decoded = decodeSigningPayload(signingPayload, ASTAR_TEST_OPTIONS);

		expect(decoded.eraPeriod).toBe(0);
	});
});
