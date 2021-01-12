import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface StakingPayoutStakersArgs extends Args {
	/**
	 * The Stash account of a _validator._ Their nominators, up to, the maximum
	 * `MaxNominatorRewardedPerValidator`, will also receive their rewards.
	 */
	validatorStash: string;
	/**
	 * May be any era between `[current_era - history_depth; current_era]`. Substrate only
	 * retains up to `history_depth` eras of reward information.
	 */
	era: number | string;
}

/**
 *
 * Pay out all the stakers behind a single validator for a single era.
 *
 * Any account can call this function, even if it is not one of the stakers.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function payoutStakers(
	args: StakingPayoutStakersArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'payoutStakers',
				pallet: 'staking',
			},
			...info,
		},
		options
	);
}
