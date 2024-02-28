import {
	ASTAR_TEST_BASE_TX_INFO,
	ASTAR_TEST_METHOD_ARGS,
	ASTAR_TEST_OPTIONS,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import {
	itDecodesBalancesTransferAstar,
	itDecodesBalancesTransferCommon,
} from '../../test-helpers';
import { DecodedUnsignedTx } from '../../types';
import { decodeUnsignedTx } from './decodeUnsignedTx';

export function itDecodesUnsignedBalanceTransferTx(
	decoded: DecodedUnsignedTx,
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

export function itDecodesAstarUnsignedBalanceTransferTx(
	decoded: DecodedUnsignedTx,
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
	).forEach((key) => expect(decoded[key]).toBe(ASTAR_TEST_BASE_TX_INFO[key]));
}

describe('decodeUnsignedTx', () => {
	it('should decode balances::transfer for Kusama', () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		const decoded = decodeUnsignedTx(unsigned, KUSAMA_TEST_OPTIONS);

		itDecodesUnsignedBalanceTransferTx(decoded);

		itDecodesBalancesTransferCommon(decoded);
	});

	it('should decode balances::transfer for Astar', () => {
		const unsigned = balancesTransfer(
			ASTAR_TEST_METHOD_ARGS.balances.transfer,
			ASTAR_TEST_BASE_TX_INFO,
			ASTAR_TEST_OPTIONS,
		);

		const decoded = decodeUnsignedTx(unsigned, ASTAR_TEST_OPTIONS);

		itDecodesAstarUnsignedBalanceTransferTx(decoded);

		itDecodesBalancesTransferAstar(decoded);
	});

	it('Should decode balances::transfer for an immortal era', () => {
		const adjustedOptions = {
			...KUSAMA_TEST_OPTIONS,
			isImmortalEra: true,
		};
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			adjustedOptions,
		);

		const decoded = decodeUnsignedTx(unsigned, adjustedOptions);

		expect(decoded.eraPeriod).toBe(0);
	});

	it('Should decode balances::transfer for an immortal era fro Astar', () => {
		const adjustedOptions = {
			...ASTAR_TEST_OPTIONS,
			isImmortalEra: true,
		};
		const unsigned = balancesTransfer(
			ASTAR_TEST_METHOD_ARGS.balances.transfer,
			ASTAR_TEST_BASE_TX_INFO,
			adjustedOptions,
		);

		const decoded = decodeUnsignedTx(unsigned, adjustedOptions);

		expect(decoded.eraPeriod).toBe(0);
	});
});
