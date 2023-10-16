import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsClaimCommission extends Args {
	/**
	 * A valid poolId.
	 */
	poolId: number | string;
}

/**
 * Claim pending commission.
 *
 * The dispatch origin of this call must be signed by the `root` role of the pool. Pending
 * commission is paid out and added to total claimed commission`. Total pending commission
 * is reset to zero. the current.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function claimCommission(
	args: NominationPoolsClaimCommission,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'claimCommission',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
