import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsNominate extends Args {
	/**
	 * A valid PoolId.
	 */
	poolId: number | string;
	/**
	 * Array of validators.
	 */
	validators: Array<string>;
}

/**
 * Nominate on behalf of the pool.
 *
 * The dispatch origin of this call must be signed by the pool nominator or the pool
 * root role.
 *
 * This directly forward the call to the staking pallet, on behalf of the pool bonded
 * account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function nominate(
	args: NominationPoolsNominate,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'nominate',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
