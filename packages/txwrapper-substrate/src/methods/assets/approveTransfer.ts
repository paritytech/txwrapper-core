import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface AssetsApproveTransferArgs extends Args {
	/**
	 * The identifier of the asset.
	 */
	id: number;
	/**
	 * The account to delegate permission to transfer asset.
	 */
	delegate: string;
	/**
	 * The amount of asset that may be transferred by `delegate`. If there is
	 * already an approval in place, then this acts additively.
	 */
	amount: number | string;
}

/**
 * Approve an amount of asset for transfer by a delegated third-party account.
 *
 * NOTE: The signing account does not need to own `amount` of assets at the point of
 * making this call.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function approveTransfer(
	args: AssetsApproveTransferArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'approveTransfer',
				pallet: 'assets',
			},
			...info,
		},
		options,
	);
}
