import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface PoolAssetsTransferKeepAliveArgs extends Args {
	/**
	 * The identifier of the foreignAsset to have some amount transferred formatted as a MultiLocation.
	 */
	id: number;
	/**
	 * The account to be credited.
	 */
	target: string;
	/**
	 * The amount by which the sender's balance of poolAssets should be reduced and
	 * `target`'s balance increased. The amount actually transferred may be slightly greater in
	 * the case that the transfer would otherwise take the sender balance above zero but below
	 * the minimum balance. Must be greater than zero.
	 */
	amount: number | string;
}

/**
 * Move some poolAssets from the sender account to another, keeping the sender account alive.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function transferKeepAlive(
	args: PoolAssetsTransferKeepAliveArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transferKeepAlive',
				pallet: 'poolAssets',
			},
			...info,
		},
		options,
	);
}
