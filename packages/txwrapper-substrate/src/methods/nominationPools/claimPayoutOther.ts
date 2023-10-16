import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsClaimPayoutOther extends Args {
	/**
	 * AccountId.
	 */
	other: string;
}

/**
 * `origin` can claim payouts on some pool member `other`'s behalf.
 *
 * Pool member `other` must have a `PermissionlessAll` or `PermissionlessWithdraw` in order
 * for this call to be successful.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function claimPayoutOther(
	args: NominationPoolsClaimPayoutOther,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'claimPayoutOther',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
