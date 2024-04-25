import { AnyJson } from '@polkadot/types/types';
import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface CreatePoolArgs extends Args {
	/**
	 * The identifier of the first asset of the pool.
	 */
	asset1: AnyJson;
	/**
	 * The identifier of the second asset of the pool.
	 */
	asset2: AnyJson;
}

/**
 * Creates an empty liquidity pool and an associated new `lpToken` asset.
 *
 * Once a pool is created, someone may add liquidity to it.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function createPool(
	args: CreatePoolArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'createPool',
				pallet: 'assetConversion',
			},
			...info,
		},
		options,
	);
}
