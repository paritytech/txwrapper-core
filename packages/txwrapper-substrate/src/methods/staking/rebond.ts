import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface StakingRebondArgs extends Args {
	/**
	 * The number of tokens to rebond.
	 */
	value: number | string;
}

/**
 * Rebond a portion of the stash scheduled to be unlocked.
 *
 * The dispatch origin must be signed by the controller, and it can be only called when
 * `EraElectionStatus` is `Closed`.
 *
 **/
export function rebond(
	args: StakingRebondArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'rebond',
				pallet: 'staking',
			},
			...info,
		},
		options
	);
}
