import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface BalancesTransferArgs extends Args {
	/**
	 * The recipient address, SS-58 encoded.
	 */
	dest: { id: string };
	/**
	 * The amount to send.
	 */
	value: number | string;
}

/**
 * Construct a balance transfer transaction offline.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function transferAllowDeath(
	args: BalancesTransferArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transferAllowDeath',
				pallet: 'balances',
			},
			...info,
		},
		options
	);
}
