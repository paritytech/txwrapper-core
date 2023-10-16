import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsSetMetadata extends Args {
	/**
	 * A valid PoolId.
	 */
	poolId: number | string;
	/**
	 * Metadata for the pool.
	 */
	metadata: string;
}

/**
 * Set a new metadata for the pool.
 *
 * The dispatch origin of this call must be signed by the bouncer, or the root role of the
 * pool.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setMetadata(
	args: NominationPoolsSetMetadata,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'setMetadata',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
