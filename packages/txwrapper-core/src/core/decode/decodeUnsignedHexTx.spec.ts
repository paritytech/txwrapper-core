import {
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';
import { balancesTransfer } from '../../test-helpers';
import { encodeUnsignedTransaction } from '../construct/encodeUnsignedTx';
import { decodeUnsignedHexTx } from './decodeUnsignedHexTx';

describe('decodeUnsignedHexTx', () => {
	it('should return the correct output', () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		const expectedResponse = {
			method: {
				args: {
					dest: '14PiLtTQ3EBwsn6KimaBLH7qsZrryxFZtqFwAognHVZhFxU1',
					value: 12,
				},
				callIndex: '0x0600',
			},
			version: 4,
		};

		const encoded = encodeUnsignedTransaction(
			unsigned,
			POLKADOT_25_TEST_OPTIONS
		);
		const decoded = decodeUnsignedHexTx(encoded, POLKADOT_25_TEST_OPTIONS);

		expect(decoded).toStrictEqual(expectedResponse);
	});
});
