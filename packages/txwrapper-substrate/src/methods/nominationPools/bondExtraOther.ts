import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { NominationPoolsBondExtra } from './bondExtra';

export interface NominationPoolsBondExtraOther
	extends NominationPoolsBondExtra {
	/**
	 * AccountId.
	 */
	member: string;
}

/**
 * `origin` bonds funds from `extra` for some pool member `member` into their respective
 * pools.
 *
 * `origin` can bond extra funds from free balance or pending rewards when `origin ==
 * other`.
 *
 * In the case of `origin != other`, `origin` can only bond extra pending rewards of
 * `other` members assuming set_claim_permission for the given member is
 * `PermissionlessAll` or `PermissionlessCompound`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function bondExtraOther(
	args: NominationPoolsBondExtraOther,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'bondExtraOther',
				pallet: 'nominationPools',
			},
			...info,
		},
		options,
	);
}
