import { AnyJson } from '@polkadot/types/types';
import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface SwapExactTokensArgs extends Args {
	/**
	 * The path of the assets in to be swappeds, as an array of XCM `Locations`.
	 */
	path: AnyJson[];
	/**
	 * The amount of path[0] to swap for path[1].
	 */
	amountIn: number | string;
	/**
	 * Minimum amount of path[1] willing to receive after the swap.
	 */
	amountOutMin: number | string;
	/**
	 * Destination addres for the amount of path[1] tokens swapped.
	 */
	sendTo: number | string;
	/**
	 * Limit the amount of path[0] taken to keep the account from being reaped.
	 */
	keepAlive: boolean;
}

/**
 * Swap exactly `amountIn` of asset `path[0]` for asset `path[1]`.
 *
 * If an `amountOutMin` is specified, it will return an error if it is unable to acquire
 * the amount desired.
 *
 * Withdraws the `path[0]` asset from `sender`, deposits the `path[1]` asset to `sendTo`,
 * respecting `keepAlive`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function swapExactTokensForTokens(
	args: SwapExactTokensArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'swapExactTokensForTokens',
				pallet: 'assetConversion',
			},
			...info,
		},
		options,
	);
}
