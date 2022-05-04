import {
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import { itDecodesBalancesTransferCommon } from '../../test-helpers';
import { DecodedUnsignedTx } from '../../types';
import { decodeUnsignedTx } from './decodeUnsignedTx';

export function itDecodesUnsignedBalanceTransferTx(
	decoded: DecodedUnsignedTx
): void {
	(
		[
			'address',
			'blockHash',
			'blockNumber',
			'genesisHash',
			'metadataRpc',
			'nonce',
			'specVersion',
			'transactionVersion',
			'tip',
		] as const
	).forEach((key) => expect(decoded[key]).toBe(TEST_BASE_TX_INFO[key]));
}

describe('decodeUnsignedTx', () => {
	it('should decode balances::transfer', () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		const decoded = decodeUnsignedTx(unsigned, POLKADOT_25_TEST_OPTIONS);

		itDecodesUnsignedBalanceTransferTx(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});

	it('Should decode balances::transfer for an immortal era', () => {
		const adjustedOptions = {
			...POLKADOT_25_TEST_OPTIONS,
			isImmortalEra: true,
		};
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			adjustedOptions
		);

		const decoded = decodeUnsignedTx(unsigned, adjustedOptions);

		expect(decoded.eraPeriod).toBe(0);
	});
});
