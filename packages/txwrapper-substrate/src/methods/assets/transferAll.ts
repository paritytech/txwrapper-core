import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface AssetsTransferAllArgs extends Args {
	/**
	 * The identifier of the asset to have some amount transferred.
	 */
	id: number;
	/**
	 * The account to be credited.
	 */
	dest: string;
	/**
	 * Limit the amount of the asset transferred to keep the account from being reaped.
	 */
	keepAlive: boolean;
}

/**
 * Move some assets from the sender account to another.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function transferAll(
	args: AssetsTransferAllArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transferAll',
				pallet: 'assets',
			},
			...info,
		},
		options,
	);
}
