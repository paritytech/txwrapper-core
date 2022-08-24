import {
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import { itDecodesBalancesTransferCommon } from '../../test-helpers';
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

describe('decodeSigningPayload', () => {
	it('should decode balances::transfer', () => {
		const signingPayload = construct.signingPayload(
			balancesTransfer(
				TEST_METHOD_ARGS.balances.transfer,
				TEST_BASE_TX_INFO,
				POLKADOT_25_TEST_OPTIONS
			),
			POLKADOT_25_TEST_OPTIONS
		);

		const decoded = decodeSigningPayload(
			signingPayload,
			POLKADOT_25_TEST_OPTIONS
		);

		itDecodesSigningPayloadBalancesTransfer(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});

	it('should decode balances::transfer with an immortal era', () => {
		const signingPayload = construct.signingPayload(
			balancesTransfer(
				TEST_METHOD_ARGS.balances.transfer,
				TEST_BASE_TX_INFO,
				Object.assign({}, POLKADOT_25_TEST_OPTIONS, { isImmortalEra: true })
			),
			POLKADOT_25_TEST_OPTIONS
		);

		const decoded = decodeSigningPayload(
			signingPayload,
			POLKADOT_25_TEST_OPTIONS
		);

		expect(decoded.eraPeriod).toBe(0);
	});
});
