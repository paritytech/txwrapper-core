import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface PoolAssetsCancelApprovalArgs extends Args {
	/**
	 * The identifier of the asset from poolAsset.
	 */
	id: number;
	/**
	 * The account delegated permission to transfer an asset from poolAsset.
	 */
	delegate: string;
}

/**
 * Cancel all of some asset of poolAsset approved for delegated transfer by a third-party account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function cancelApproval(
	args: PoolAssetsCancelApprovalArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'cancelApproval',
				pallet: 'poolAssets',
			},
			...info,
		},
		options,
	);
}
