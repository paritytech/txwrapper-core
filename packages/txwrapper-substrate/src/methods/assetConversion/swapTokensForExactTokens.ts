import { AnyJson } from '@polkadot/types/types';
import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface SwapTokensArgs extends Args {
	/**
	 * The path of the assets in to be swappeds, as an array of XCM `Locations`.
	 */
	path: AnyJson[];
	/**
	 * The amount of path[1] to get from the swap.
	 */
	amountOut: number | string;
	/**
	 * Minimum amount of path[0] willing to deposit for the swap.
	 */
	amountInMax: number | string;
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
 * Swap asset `path[0]` for asset `path[1]` to get exactly `amountOut`.
 *
 * If an `amountInMax` is specified, it will return an error if acquiring `amountOut`
 * would be too costly.
 *
 * Withdraws the `path[0]` asset from `sender`, deposits the `path[1]` asset to `sendTo`,
 * respecting `keepAlive`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function swapTokensForExactTokens(
	args: SwapTokensArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'swapTokensForExactTokens',
				pallet: 'assetConversion',
			},
			...info,
		},
		options,
	);
}
