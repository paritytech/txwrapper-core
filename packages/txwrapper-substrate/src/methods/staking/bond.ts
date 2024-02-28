import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { StakingSetPayeeArgs } from './setPayee';

export interface StakingBondArgs extends StakingSetPayeeArgs {
	/**
	 * The number of tokens to bond.
	 */
	value: number | string;
}

/**
 * Construct a transaction to bond funds and create a Stash account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function bond(
	args: StakingBondArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'bond',
				pallet: 'staking',
			},
			...info,
		},
		options,
	);
}
