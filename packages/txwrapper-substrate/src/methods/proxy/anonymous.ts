import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

interface ProxyAnonymousArgs extends Args {
	/**
	 * The type of proxy to be created.
	 */
	proxyType: string;
	/**
	 * The time delay before an announced call can be executed.
	 */
	delay: number;
	/**
	 * The index of the anonymous proxy.
	 */
	index: number;
}

/**
 * Create an anonymous proxy.
 *
 * This must be called `ProxyDefinition.delay` blocks before the corresponding
 * `proxy` is attempted if the delay associated with the proxy relationship is
 * greater than zero. When a `ProxyDefinition.delay` is 0 `anonymous` is not neccesary
 * and `proxy` can be called at any time.
 *
 * No more than `MaxPending` anouncements may be made at any one time. On Kusama and Polkadot
 * `MaxPending` is set to 32.
 *
 * This will take a deposit of `AnouncementDepositFactor` as well as
 * `AnonymousmentDepositBase` if there are no other pending anonymousments.
 *
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function anonymous(
	args: ProxyAnonymousArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'anonymous',
				pallet: 'proxy',
			},
			...info,
		},
		options
	);
}
