import { AnyJson } from '@polkadot/types/types';
import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface RemoveLiquidityArgs extends Args {
	/**
	 * The identifier of the first asset of the pool.
	 */
	asset1: AnyJson;
	/**
	 * The identifier of the second asset of the pool.
	 */
	asset2: AnyJson;
	/**
	 * Amount of tokens of this liquidity pool that will be burned in the process.
	 */
	lpTokenBurn: number | string;
	/**
	 * Minimum amount of returned asset1 tokens you're happy with.
	 */
	amount1MinReceive: number | string;
	/**
	 * Minimum amount of returned asset2 tokens you're happy with.
	 */
	amount2MinReceive: number | string;
	/**
	 * Destination of the tokens returned after burning `lpTokenBurn` amount of liquidity pool tokens.
	 */
	withdrawTo: string;
}

/**
 * Allows you to remove liquidity by providing the `lpTokenBurn` tokens that will be
 * burned in the process.
 *
 * With the usage of `amount1MinReceive`/`amount2MinReceive`
 * it's possible to control the min amount of returned tokens you're happy with.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function removeLiquidity(
	args: RemoveLiquidityArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'removeLiquidity',
				pallet: 'assetConversion',
			},
			...info,
		},
		options,
	);
}
