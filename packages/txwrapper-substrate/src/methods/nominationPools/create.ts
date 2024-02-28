import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsCreate extends Args {
	/**
	 * The amount of funds to delegate to the pool. This also acts of a sort of
	 * deposit since the pools creator cannot fully unbond funds until the pool is being
	 * destroyed.
	 */
	amount: string;
	/**
	 * The account to set as [`PoolRoles::root`].
	 */
	root: string;
	/**
	 * The account to set as the [`PoolRoles::nominator`].
	 */
	nominator: string;
	/**
	 * The account to set as the [`PoolRoles::bouncer`].
	 */
	bouncer: string;
}

/**
 * Create a new delegation pool.
 *
 * # Note
 *
 * In addition to `amount`, the caller will transfer the existential deposit; so the caller
 * needs at have at least `amount + existential_deposit` transferrable.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function create(
	args: NominationPoolsCreate,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'create',
				pallet: 'nominationPools',
			},
			...info,
		},
		options,
	);
}
