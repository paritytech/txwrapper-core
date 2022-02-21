import { hexToU8a } from '@polkadot/util';

import { KUSAMA_9160_TEST_OPTIONS } from '../../test-helpers';
import { toTxMethod } from './toTxMethod';

const { registry } = KUSAMA_9160_TEST_OPTIONS;

describe('toTxMethod', () => {
	// transferKeepAlive signedTx constructed using kusama v9160 metadata
	const signedTx =
		'0x4d028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d014c39c61d2526afa7adf0a5683a97cefe6cd1cbdc4dd220eaa34ee20c88051057ad726f28371bbe9dcede5213ed29ef5817da15090db7d1886698836847098887550100000403008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4813f6ffffffffff3f01';
	const extrinsic = registry.createType('Extrinsic', hexToU8a(signedTx), {
		isSigned: true,
	});
	const txMethodCall = registry.createType('Call', extrinsic.method);

	it('decode an extrinsics method', () => {
		const expectedResponse = {
			args: {
				dest: {
					id: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
				},
				value: '90071992547409910',
			},
			name: 'transferKeepAlive',
			pallet: 'balances',
		};

		const txMethod = toTxMethod(
			KUSAMA_9160_TEST_OPTIONS.registry,
			txMethodCall
		);

		expect(txMethod).toStrictEqual(expectedResponse);
	});
});
