import { Metadata, TypeRegistry } from '@polkadot/types';

import {
	balancesTransfer,
	POLKADOT_25_TEST_OPTIONS,
	POLKADOT_9122_TEST_OPTIONS,
	POLKADOT_9122_TEST_OPTIONS_CALLS_ONLY,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test-helpers/';
import { defineMethod } from './defineMethod';

describe('defineMethod', () => {
	it('should create correct default era', () => {
		const txBaseInfo = {
			...TEST_BASE_TX_INFO,
			eraPeriod: undefined,
		};
		const unsigned = defineMethod(
			{
				...txBaseInfo,
				method: {
					args: {},
					name: 'chill',
					pallet: 'staking',
				},
			},
			POLKADOT_25_TEST_OPTIONS
		);

		expect(unsigned.era).toBe('0xe500');
	});

	it('should handle `info.eraPeriod` correctly when 0', () => {
		const txBaseInfo = {
			...TEST_BASE_TX_INFO,
			eraPeriod: 0,
		};
		const unsigned = defineMethod(
			{
				...txBaseInfo,
				method: {
					args: {},
					name: 'chill',
					pallet: 'staking',
				},
			},
			POLKADOT_25_TEST_OPTIONS
		);

		expect(unsigned.era).toBe('0x2100');
	});

	it('should work', () => {
		const txBaseInfo = {
			...TEST_BASE_TX_INFO,
			eraPeriod: 2,
		};
		const unsigned = defineMethod(
			{
				...txBaseInfo,
				method: {
					args: {},
					name: 'chill',
					pallet: 'staking',
				},
			},
			POLKADOT_25_TEST_OPTIONS
		);

		expect(unsigned.era).toBe('0x2100');
		expect(unsigned.signedExtensions).toStrictEqual([
			'CheckSpecVersion',
			'CheckTxVersion',
			'CheckGenesis',
			'CheckMortality',
			'CheckNonce',
			'CheckWeight',
			'ChargeTransactionPayment',
		]);
		expect(unsigned.method).toBe('0x0806');
		expect(unsigned.nonce).toBe('0x00000002');
		expect(unsigned.address).toBe(TEST_BASE_TX_INFO.address);
		expect(unsigned.blockNumber).toBe('0x0041a58e');
	});

	it('Should have a smaller unsigned tx size when using `asCallsOnlyArg` with V14 formatted metadata', () => {
		// balancesTransfer is a test helper that uses defineMethod to construct a unsigned tx
		const unsignedPayload = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_9122_TEST_OPTIONS
		);

		const unsignedPayloadCallsOnly = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_9122_TEST_OPTIONS_CALLS_ONLY
		);

		expect(
			Buffer.from(JSON.stringify(unsignedPayloadCallsOnly), 'utf-8').length
		).toBeLessThan(
			Buffer.from(JSON.stringify(unsignedPayload), 'utf-8').length
		);
	});

	it('The integrity of the metadata in an unsigned transaction should be reuseable', () => {
		const unsignedPayload = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_9122_TEST_OPTIONS
		);

		/**
		 * This ensures that the metadata returned in the unsigned transaction
		 * can be reused in a new type registry without erroring.
		 */
		const registry = new TypeRegistry();
		expect(
			() => new Metadata(registry, unsignedPayload.metadataRpc)
		).not.toThrow();
	});
});
