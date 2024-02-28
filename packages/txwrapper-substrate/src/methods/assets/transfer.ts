import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface AssetsTransferArgs extends Args {
	/**
	 * The identifier of the asset to have some amount transferred.
	 */
	id: number;
	/**
	 * The account to be credited.
	 */
	target: string;
	/**
	 * The amount by which the sender's balance of assets should be reduced and
	 * `target`'s balance increased. The amount actually transferred may be slightly greater in
	 * the case that the transfer would otherwise take the sender balance above zero but below
	 * the minimum balance. Must be greater than zero.
	 */
	amount: number | string;
}

/**
 * Move some assets from the sender account to another.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function transfer(
	args: AssetsTransferArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transfer',
				pallet: 'assets',
			},
			...info,
		},
		options,
	);
}
