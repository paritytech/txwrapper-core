import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsPoolWithdrawUnbonded extends Args {
	/**
	 * Pool id that will have `withdraw_unbonded` called on it.
	 */
	poolId: string | number;
	/**
	 * Number of slashing spans.
	 */
	numSlashingSpans: string | number;
}

/**
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function poolWithdrawUnbonded(
	args: NominationPoolsPoolWithdrawUnbonded,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'poolWithdrawUnbonded',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
