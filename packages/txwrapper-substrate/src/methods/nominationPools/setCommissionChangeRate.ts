import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsSetCommissionChangeRate extends Args {
	/**
	 * A valid PoolId.
	 */
	poolId: number;
	changeRate: {
		/**
		 * The maximum amount the commission can be updated by per `min_delay` period.
		 */
		maxIncrease: string;
		/**
		 * How often an update can take place.
		 */
		minDelay: number | string;
	};
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
export function setCommissionChangeRate(
	args: NominationPoolsSetCommissionChangeRate,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'setCommissionChangeRate',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
