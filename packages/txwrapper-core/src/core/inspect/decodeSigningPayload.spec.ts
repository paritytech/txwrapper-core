import { core } from '../../core';
import {
	balancesTransfer,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test/';
import { decodeSigningPayload } from './decodeSigningPayload';

describe('decodeSigningPayload', () => {
	it('should decode balances::transfer', () => {
		const signingPayload = core.create.createSigningPayload(
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

		([
			'blockHash',
			'genesisHash',
			'metadataRpc',
			'nonce',
			'specVersion',
			'tip',
		] as const).forEach((key) =>
			expect(decoded[key]).toBe(TEST_BASE_TX_INFO[key])
		);

		expect(decoded.method.pallet).toBe('balances');
		expect(decoded.method.name).toBe('transfer');
		expect(decoded.method.args).toStrictEqual(
			TEST_METHOD_ARGS.balances.transfer
		);
	});
});
