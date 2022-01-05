import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

interface ProxyKillAnonymousArgs extends Args {
	/**
	 * The account that originally called `anonymous` to create this account.
	 */
	spawner: string;
	/**
	 * The proxy type originally passed to `anonymous`.
	 */
	proxyType: string;
	/**
	 * The disambiguation index originally passed to `anonymous`. Probably `0`
	 */
	index: number;
	/**
	 * The height of the chain when the call to `anonymous` was processed.
	 */
	height: number;
	/**
	 * The extrinsic index in which the call to `anonymous` was processed.
	 */
	extIndex: number;
}

/**
 * Removes a previously spawned anonymous proxy.
 *
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 *
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `anonymous` with corresponding parameters.
 *
 * Fails with `NoPermission` in case the caller is not a previously created anonymous
 * account whose `anonymous` call has corresponding parameters.
 *
 * @param args Arguments specific to this method.
 * @param info Information required to construct the transaction.
 * @param options Registry and metadata used for constructing the method.
 * @returns
 */
export function killAnonymous(
	args: ProxyKillAnonymousArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'killAnonymous',
				pallet: 'proxy',
			},
			...info,
		},
		options
	);
}
