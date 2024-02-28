import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface TokensTransferArgs extends Args {
	/**
	 * The recipient of the transfer.
	 */
	dest: string;
	/**
	 * The currency type.
	 */
	currencyId: string | { Token: string } | { DEXShare: string };
	/**
	 * The free balance amount to tranfer.
	 */
	amount: number | string;
}

export function transfer(
	args: TokensTransferArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transfer',
				pallet: 'tokens',
			},
			...info,
		},
		options,
	);
}
