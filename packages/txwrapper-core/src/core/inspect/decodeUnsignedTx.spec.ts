import {
	balancesTransfer,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test/';
import { decodeUnsignedTx } from './decodeUnsignedTx';

describe('decodeUnsignedTx', () => {
	it('should decode balances::transfer', () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		const decoded = decodeUnsignedTx(unsigned, POLKADOT_25_TEST_OPTIONS);

		([
			'address',
			'blockHash',
			'blockNumber',
			'genesisHash',
			'metadataRpc',
			'nonce',
			'specVersion',
			'transactionVersion',
			'tip',
		] as const).forEach((key) =>
			expect(decoded[key]).toBe(TEST_BASE_TX_INFO[key])
		);

		// The actual period is the smallest power of 2 greater than the input
		// period.
		expect(decoded.eraPeriod).toBeGreaterThanOrEqual(
			TEST_BASE_TX_INFO.eraPeriod
		);

		expect(decoded.method.pallet).toBe('balances');
		expect(decoded.method.name).toBe('transfer');
		expect(decoded.method.args).toStrictEqual(
			TEST_METHOD_ARGS.balances.transfer
		);
	});
});
