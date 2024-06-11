import { hexToU8a } from '@polkadot/util';
import { KUSAMA_TEST_OPTIONS } from '@substrate/txwrapper-dev';

import { toTxMethod } from './toTxMethod';

const { registry } = KUSAMA_TEST_OPTIONS;

describe('toTxMethod', () => {
	// transferKeepAlive signedTx constructed using kusama v102005 metadata
	const signedTx =
		'0x35028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0158cce12a918473c52dd677597fae52ae73f1ad62bf05a4973bceba165be8c91dac0182fdda489a30013ad253979e14ba1948938a6af163e33237dd8431eb43810502000000040300d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d011f';
	const extrinsic = registry.createType('Extrinsic', hexToU8a(signedTx), {
		isSigned: true,
	});
	const txMethodCall = registry.createType('Call', extrinsic.method);

	it('decode an extrinsics method', () => {
		const expectedResponse = {
			args: {
				dest: {
					id: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F',
				},
				value: '1984',
			},
			name: 'transferKeepAlive',
			pallet: 'balances',
		};

		const txMethod = toTxMethod(registry, txMethodCall);

		expect(txMethod).toStrictEqual(expectedResponse);
	});
});
