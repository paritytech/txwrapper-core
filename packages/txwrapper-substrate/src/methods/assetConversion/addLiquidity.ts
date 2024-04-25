import { AnyJson } from '@polkadot/types/types';
import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface AddLiquidityArgs extends Args {
	/**
	 * The identifier of the first asset of the pool.
	 */
	asset1: AnyJson;
	/**
	 * The identifier of the second asset of the pool.
	 */
	asset2: AnyJson;
	/**
	 * Amount of the first asset willing to provide the liquidity pool with.
	 */
	amount1Desired: number | string;
	/**
	 * Amount of the second asset willing to provide the liquidity pool with.
	 */
	amount2Desired: number | string;
	/**
	 * Minimum amount of the first asset willing to provide the liquidity pool with.
	 */
	amount1Min: number | string;
	/**
	 * Minimum amount of the second asset willing to provide the liquidity pool with.
	 */
	amount2Min: number | string;
	/**
	 * Recipient of the liquidity tokens that represent this share of the pool.
	 */
	mintTo: string;
}

/**
 * Provide liquidity into the pool of `asset1` and `asset2`.
 *
 * NOTE: an optimal amount of asset1 and asset2 will be calculated and
 * might be different than the provided `amount1Desired`/`amount2Desired`,
 * limited by `amount1Min`/`amount2Min`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function addLiquidity(
	args: AddLiquidityArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'addLiquidity',
				pallet: 'assetConversion',
			},
			...info,
		},
		options,
	);
}
