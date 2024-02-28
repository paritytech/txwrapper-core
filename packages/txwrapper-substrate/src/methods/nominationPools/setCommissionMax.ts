import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsSetCommissionMax extends Args {
	/**
	 * A valid PoolId.
	 */
	poolId: number | string;
	/**
	 * Value to set the max commission too.
	 */
	maxCommission: string;
}

/**
 * Set the maximum commission of a pool.
 *
 * - Initial max can be set to any `Perbill`, and only smaller values thereafter.
 * - Current commission will be lowered in the event it is higher than a new max
 *   commission.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setCommissionMax(
	args: NominationPoolsSetCommissionMax,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'setCommissionMax',
				pallet: 'nominationPools',
			},
			...info,
		},
		options,
	);
}
