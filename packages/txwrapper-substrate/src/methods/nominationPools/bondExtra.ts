import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsBondExtra extends Args {
	extra: {
		/**
		 * Take from the free balance.
		 */
		FreeBalance: string | null;
		/**
		 * Take the entire amount from the accumulated rewards.
		 */
		Rewards: boolean | null;
	};
}

/**
 * Bond `extra` more funds from `origin` into the pool to which they already belong.
 *
 * Additional funds can come from either the free balance of the account, or from the
 * accumulated rewards, see [`BondExtra`].
 *
 * Bonding extra funds implies an automatic payout of all pending rewards as well.
 * See `bond_extra_other` to bond pending rewards of `other` members.
 *
 * NOTE: this transaction is implemented with the sole purpose of readability and
 * correctness, not optimization. We read/write several storage items multiple times instead
 * of just once, in the spirit of reusing code.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function bondExtra(
	args: NominationPoolsBondExtra,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'bondExtra',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
