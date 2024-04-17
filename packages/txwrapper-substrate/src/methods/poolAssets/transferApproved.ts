import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface PoolAssetsTransferApprovedArgs extends Args {
	/**
	 * The identifier of the foreignAsset formatted as a MultiLocation.
	 */
	id: number;
	/**
	 * The account which previously approved for a transfer of at least `amount` and
	 * from which the foreignAsset balance will be withdrawn.
	 */
	owner: string;
	/**
	 * The account to which the foreignAsset balance of `amount` will be transferred.
	 */
	destination: string;
	/**
	 * The amount of poolAssets to transfer.
	 */
	amount: number | string;
}

/**
 * Transfer some foreignAsset balance from a previously delegated account to some third-party
 * account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function transferApproved(
	args: PoolAssetsTransferApprovedArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transferApproved',
				pallet: 'poolAssets',
			},
			...info,
		},
		options,
	);
}
