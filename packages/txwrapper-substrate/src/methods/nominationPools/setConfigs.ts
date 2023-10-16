import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

type ConfigOp<T> = {
	Noop?: null;
	Remove?: null;
	Set: T;
};

export interface NominationPoolsSetConfigs extends Args {
	/**
	 * Set [`MinJoinBond`].
	 */
	minJoinBond: ConfigOp<string>;
	/**
	 * Set [`MinCreateBond`].
	 */
	minCreateBond: ConfigOp<string>;
	/**
	 * Set [`MaxPools`].
	 */
	maxPools: ConfigOp<string | number>;
	/**
	 * Set [`MaxPoolMembers`].
	 */
	maxMembers: ConfigOp<string | number>;
	/**
	 * Set [`MaxPoolMembersPerPool`].
	 */
	maxMembersPerPool: ConfigOp<string | number>;
	/**
	 * Set [`GlobalMaxCommission`].
	 */
	globalMaxCommission: ConfigOp<string>;
}

/**
 * Update configurations for the nomination pools. The origin for this call must be
 * Root.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setConfigs(
	args: NominationPoolsSetConfigs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'setConfigs',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
