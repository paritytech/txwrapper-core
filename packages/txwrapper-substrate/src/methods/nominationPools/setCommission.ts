import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsSetCommission extends Args {
	/**
	 * A valid PoolId.
	 */
	poolId: number | string;
	/**
	 * Set the new commission.
	 * If a `None` is supplied to `new_commission`, existing commission will be removed.
	 */
	newCommission: [string, string] | null;
}

/**
 * Set the commission of a pool.
 *
 * Both a commission percentage and a commission payee must be provided in the `current`
 * tuple. Where a `current` of `None` is provided, any current commission will be removed.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setCommission(
	args: NominationPoolsSetCommission,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'setCommission',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
