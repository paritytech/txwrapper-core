import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsSetState extends Args {
	/**
	 * A valid PoolId.
	 */
	poolId: number | string;
	/**
	 * The following state of the pool.
	 * This can be set to `Open` | `Blocked` | `Destorying`.
	 */
	state: string;
}

/**
 *  Set a new state for the pool.
 *
 *  If a pool is already in the `Destroying` state, then under no condition can its state
 *  change again.
 *
 *  The dispatch origin of this call must be either:
 *
 *  1. signed by the bouncer, or the root role of the pool,
 *  2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
 *     then the state of the pool can be permissionlessly changed to `Destroying`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setState(
	args: NominationPoolsSetState,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'setState',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
