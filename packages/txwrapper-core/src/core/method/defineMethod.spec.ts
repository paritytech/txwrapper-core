import {
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '../../test/constants';
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
		expect(unsigned.address).toBe(
			'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'
		);
		expect(unsigned.blockNumber).toBe('0x0041a58e');
	});
});
