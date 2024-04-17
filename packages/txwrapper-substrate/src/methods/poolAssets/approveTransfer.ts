import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface PoolAssetsApproveTransferArgs extends Args {
	/**
	 * The identifier of the poolAsset formatted as a MultiLocation.
	 */
	id: number;
	/**
	 * The account to delegate permission to transfer poolAsset.
	 */
	delegate: string;
	/**
	 * The amount of poolAsset that may be transferred by `delegate`. If there is
	 * already an approval in place, then this acts additively.
	 */
	amount: number | string;
}

/**
 * Approve an amount of poolAssets for transfer by a delegated third-party account.
 *
 * NOTE: The signing account does not need to own `amount` of poolAssets at the point of
 * making this call.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function approveTransfer(
	args: PoolAssetsApproveTransferArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'approveTransfer',
				pallet: 'poolAssets',
			},
			...info,
		},
		options,
	);
}
