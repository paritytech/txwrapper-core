import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsUnbond extends Args {
	/**
	 * Member account of a pool to unbond.
	 */
	memberAccount: string;
	/**
	 * Amount to unbond.
	 */
	unbondingPoints: string;
}

/**
 * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
 * implicitly collects the rewards one last time, since not doing so would mean some
 * rewards would be forfeited.
 *
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 *
 * # Conditions for a permissionless dispatch.
 *
 * The pool is blocked and the caller is either the root or bouncer. This is refereed to
 * as a kick.
 * The pool is destroying and the member is not the depositor.
 * The pool is destroying, the member is the depositor and no other members are in the
 * pool.
 *
 * ## Conditions for permissioned dispatch (i.e. the caller is also the
 * `member_account`):
 *
 * The caller is not the depositor.
 * The caller is the depositor, the pool is destroying and no other members are in the
 * pool.
 *
 * # Note
 *
 * If there are too many unlocking chunks to unbond with the pool account,
 * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.
 * The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]
 * to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks
 * are available). However, it may not be possible to release the current unlocking chunks,
 * in which case, the result of this call will likely be the `NoMoreChunks` error from the
 * staking system.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function unbond(
	args: NominationPoolsUnbond,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'unbond',
				pallet: 'nominationPools',
			},
			...info,
		},
		options,
	);
}
