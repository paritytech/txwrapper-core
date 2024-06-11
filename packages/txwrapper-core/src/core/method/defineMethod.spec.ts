import { Metadata, TypeRegistry } from '@polkadot/types';
import {
	KUSAMA_TEST_OPTIONS,
	KUSAMA_TEST_OPTIONS_CALLS_ONLY,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransferKeepAlive } from '../../test-helpers';
import { createEra, defineMethod, MethodErrorMessages } from './defineMethod';

describe('defineMethod', () => {
	const { InvalidEraPeriodTooLow, InvalidEraPeriodTooHigh } =
		MethodErrorMessages;

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
			KUSAMA_TEST_OPTIONS,
		);

		expect(unsigned.era).toBe('0xe500');
	});

	it('should handle `info.eraPeriod` correctly when less than 4', () => {
		const txBaseInfo = {
			...TEST_BASE_TX_INFO,
			eraPeriod: 0,
		};
		expect(() =>
			defineMethod(
				{
					...txBaseInfo,
					method: {
						args: {},
						name: 'chill',
						pallet: 'staking',
					},
				},
				KUSAMA_TEST_OPTIONS,
			),
		).toThrow(InvalidEraPeriodTooLow);
	});

	it('should handle `info.eraPeriod` when `isImmortalEra` is true', () => {
		const txBaseInfo = {
			...TEST_BASE_TX_INFO,
			eraPeriod: 0,
		};
		/**
		 * Adds isImmortalEra to the options.
		 */
		const adjustedOptions = {
			...KUSAMA_TEST_OPTIONS,
			isImmortalEra: true,
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
			adjustedOptions,
		);

		expect(unsigned.era).toBe('0x00');
	});

	it('should work', () => {
		const txBaseInfo = {
			...TEST_BASE_TX_INFO,
			eraPeriod: 4,
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
			KUSAMA_TEST_OPTIONS,
		);

		expect(unsigned.era).toBe('0x2100');
		expect(unsigned.signedExtensions).toStrictEqual([
			'CheckNonZeroSender',
			'CheckSpecVersion',
			'CheckTxVersion',
			'CheckGenesis',
			'CheckMortality',
			'CheckNonce',
			'CheckWeight',
			'ChargeTransactionPayment',
			'CheckMetadataHash',
		]);
		expect(unsigned.method).toBe('0x0606');
		expect(unsigned.nonce).toBe('0x00000002');
		expect(unsigned.address).toBe(TEST_BASE_TX_INFO.address);
		expect(unsigned.blockNumber).toBe('0x0041a58e');
	});

	it('Should have a smaller unsigned tx size when using `asCallsOnlyArg` with V14 formatted metadata', () => {
		// balancesTransfer is a test helper that uses defineMethod to construct a unsigned tx
		const unsignedPayload = balancesTransferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		const unsignedPayloadCallsOnly = balancesTransferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS_CALLS_ONLY,
		);

		expect(
			Buffer.from(JSON.stringify(unsignedPayloadCallsOnly), 'utf-8').length,
		).toBeLessThan(
			Buffer.from(JSON.stringify(unsignedPayload), 'utf-8').length,
		);
	});

	it('The integrity of the metadata in an unsigned transaction should be reuseable', () => {
		const unsignedPayload = balancesTransferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		/**
		 * This ensures that the metadata returned in the unsigned transaction
		 * can be reused in a new type registry without erroring.
		 */
		const registry = new TypeRegistry();
		expect(
			() => new Metadata(registry, unsignedPayload.metadataRpc),
		).not.toThrow();
	});

	describe('createEra', () => {
		const { registry } = KUSAMA_TEST_OPTIONS;

		it('Should handle values less than 4 correctly', () => {
			expect(() => {
				createEra(registry, { kind: 'mortal', blockNumber: 10, period: 0 });
			}).toThrowError(InvalidEraPeriodTooLow);
			expect(() => {
				createEra(registry, { kind: 'mortal', blockNumber: 10, period: 3 });
			}).toThrowError(InvalidEraPeriodTooLow);
		});

		it('Should handle values greater than 65536 correctly', () => {
			expect(() => {
				createEra(registry, { kind: 'mortal', blockNumber: 10, period: 65537 });
			}).toThrowError(InvalidEraPeriodTooHigh);
			expect(() => {
				createEra(registry, { kind: 'mortal', blockNumber: 10, period: 70000 });
			}).toThrowError(InvalidEraPeriodTooHigh);
		});

		it('Should handle immortal transactions correctly', () => {
			const eraImmortal = createEra(registry, { kind: 'immortal' });

			expect(eraImmortal.isImmortalEra).toBe(true);
			expect(eraImmortal.toHex()).toBe('0x00');
		});
	});
});
