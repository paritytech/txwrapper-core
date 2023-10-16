import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { NominationPoolsCreate } from './create';

export interface NominationPoolscreateWithPoolId extends NominationPoolsCreate {
	/**
	 * A valid PoolId.
	 */
	poolId: string | number;
}

/**
 * Create a new delegation pool with a previously used pool id
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function createWithPoolId(
	args: NominationPoolsCreate,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'createWithPoolId',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
