import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface AssetsTransferApprovedArgs extends Args {
	/**
	 * The identifier of the asset.
	 */
	id: number;
	/**
	 * The account which previously approved for a transfer of at least `amount` and
	 * from which the asset balance will be withdrawn.
	 */
	owner: string;
	/**
	 * The account to which the asset balance of `amount` will be transferred.
	 */
	destination: string;
	/**
	 * The amount of assets to transfer.
	 */
	amount: number;
}

/**
 * Transfer some asset balance from a previously delegated account to some third-party
 * account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function transferApproved(
	args: AssetsTransferApprovedArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transferApproved',
				pallet: 'assets',
			},
			...info,
		},
		options
	);
}
