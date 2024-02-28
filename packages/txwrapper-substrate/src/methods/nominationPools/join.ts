import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsJoin extends Args {
	/**
	 * The amount to bond.
	 */
	amount: string;
	/**
	 * The pool Id to join.
	 */
	poolId: number | string;
}

/**
 * Stake funds with a pool. The amount to bond is transferred from the member to the
 * pools account and immediately increases the pools bond.
 *
 * Note:
 *
 * - An account can only be a member of a single pool.
 * - An account cannot join the same pool multiple times.
 * - This call will *not* dust the member account, so the member must have at least
 *   `existential deposit + amount` in their account.
 * - Only a pool with [`PoolState::Open`] can be joined
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function join(
	args: NominationPoolsJoin,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'join',
				pallet: 'nominationPools',
			},
			...info,
		},
		options,
	);
}
