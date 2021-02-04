import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { AccountVote } from './types';

export interface DemocracyVoteArgs extends Args {
	/*
	 * Referendum index.
	 */
	refIndex: number;
	/**
	 * Vote.
	 */
	vote: AccountVote;
}

/**
 * Vote in a referendum.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function vote(
	args: DemocracyVoteArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'vote',
				pallet: 'democracy',
			},
			...info,
		},
		options
	);
}
