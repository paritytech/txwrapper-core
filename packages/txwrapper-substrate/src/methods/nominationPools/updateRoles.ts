import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import type { ConfigOp } from './setConfigs';

export interface NominationPoolsUpdateRoles extends Args {
	/**
	 * A valid PoolId.
	 */
	poolId: number;
	/**
	 * New root account.
	 */
	newRoot: ConfigOp<string>;
	/**
	 * New nominator account.
	 */
	newNominator: ConfigOp<string>;
	/**
	 * New bouncer account.
	 */
	newBouncer: ConfigOp<string>;
}

/**
 * Update the roles of the pool.
 *
 * The root is the only entity that can change any of the roles, including itself,
 * excluding the depositor, who can never change.
 *
 * It emits an event, notifying UIs of the role change. This event is quite relevant to
 * most pool members and they should be informed of changes to pool roles.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function updateRoles(
	args: NominationPoolsUpdateRoles,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'updateRoles',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
