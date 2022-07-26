import {
    Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface TokensTransferAllArgs extends Args {
    /**
     * The recipient of the transfer.
     */
    dest: string;
    /**
     * The currency type.
     */
    currencyId: string | { Token: string } | { DEXShare: string };
    /**
     * A boolean to determine if the `transfer_all`
	 * operation should send all of the funds the account has, causing
	 * the sender account to be killed (false), or transfer everything
	 * except at least the existential deposit, which will guarantee to
	 * keep the sender account alive (true).
     */
    keepAlive: boolean;
}

export function transferAll(
	args: TokensTransferAllArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transferAll',
				pallet: 'tokens',
			},
			...info,
		},
		options
	);
}