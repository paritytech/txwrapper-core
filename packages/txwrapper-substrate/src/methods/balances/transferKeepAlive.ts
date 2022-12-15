import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { BalancesTransferArgs } from './transfer';

export type BalancesTransferKeepAliveArgs = BalancesTransferArgs;

/**
 * Construct a balance transfer transaction offline.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function transferKeepAlive(
	args: BalancesTransferKeepAliveArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transferKeepAlive',
				pallet: 'balances',
			},
			...info,
		},
		options
	);
}
