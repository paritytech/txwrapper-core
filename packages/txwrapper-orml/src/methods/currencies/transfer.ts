import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { CurrenciesTransferNativeCurrencyArgs } from './transferNativeCurrency';

export interface CurrenciesTransferArgs
	extends CurrenciesTransferNativeCurrencyArgs {
	/**
	 * The `CurrencyId` of the token to send.
	 */
	currencyId: string | { Token: string } | { DEXShare: string };
}

export function transfer(
	args: CurrenciesTransferArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transfer',
				pallet: 'currencies',
			},
			...info,
		},
		options,
	);
}
