import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsWithdrawUnbonded extends Args {
	/**
	 * Account to unbond.
	 */
	memberAccount: string;
	/**
	 * Number of slashing spans.
	 */
	numSlashingSpans: string | number;
}

/**
 * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
 * error is returned.
 *
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 *
 * # Conditions for a permissionless dispatch
 *
 * The pool is in destroy mode and the target is not the depositor.
 * The target is the depositor and they are the only member in the sub pools.
 * The pool is blocked and the caller is either the root or bouncer.
 *
 * # Conditions for permissioned dispatch
 *
 * The caller is the target and they are not the depositor.
 *
 * # Note
 *
 * If the target is the depositor, the pool will be destroyed.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function withdrawUnbonded(
	args: NominationPoolsWithdrawUnbonded,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'withdrawUnbonded',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
