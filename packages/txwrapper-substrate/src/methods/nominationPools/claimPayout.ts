import {
	BaseTxInfo,
	defineMethod,
	EmptyArgs,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * 	A bonded member can use this to claim their payout based on the rewards that the pool
 *	has accumulated since their last claimed payout (OR since joining if this is their first
 *	time claiming rewards). The payout will be transferred to the member's account.
 *
 *	The member will earn rewards pro rata based on the members stake vs the sum of the
 *	members in the pools stake. Rewards do not "expire".
 *
 *	See `claim_payout_other` to caim rewards on bahalf of some `other` pool member.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function claimPayout(
	args: EmptyArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'claimPayout',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
