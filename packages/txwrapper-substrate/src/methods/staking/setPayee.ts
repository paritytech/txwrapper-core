import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface StakingSetPayeeArgs extends Args {
	/**
	 * The rewards destination. Can be "Stash", "Staked", "Controller" or "{ Account: accountId }".
	 */
	payee: string | { Account: string };
}

/**
 * (Re-)set the payment target for staking rewards.
 *
 * Comes into effect at the beginning of the next era.
 *
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setPayee(
	args: StakingSetPayeeArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'setPayee',
				pallet: 'staking',
			},
			...info,
		},
		options,
	);
}
