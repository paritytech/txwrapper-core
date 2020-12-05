import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface CurrenciesTransferNativeCurrencyArgs extends Args {
	/**
	 * The recipient address, SS-58 encoded.
	 */
	dest: string;
	/**
	 * The amount to send.
	 */
	amount: number | string;
}

export function transferNativeCurrency(
	args: CurrenciesTransferNativeCurrencyArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transferNativeCurrency',
				pallet: 'currencies',
			},
			...info,
		},
		options
	);
}
