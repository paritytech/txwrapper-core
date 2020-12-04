import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface CurrenciesTransferArgs extends Args {
	/**
	 * The recipient address, SS-58 encoded.
	 */
	dest: string;
	/**
	 * The `CurrencyId` of the token to send.
	 */
	currencyId: string;
	/**
	 * The amount to send.
	 */
	amount: number | string;
}

export function transfer(
	args: CurrenciesTransferArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
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
		options
	);
}
