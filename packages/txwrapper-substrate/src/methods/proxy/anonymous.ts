import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

interface ProxyAnonymousArgs extends Args {
	/**
	 * The type of the proxy that the sender will be registered as over the
	 * new account. This will almost always be the most permissive `ProxyType` possible to
	 * allow for maximum flexibility. (`ProxyType` variants vary by runtime.)
	 */
	proxyType: string;
	/**
	 * The announcement period (measured in number of blocks) required of the initial proxy.
	 * Will generally be zero.
	 */
	delay: number;
	/**
	 * A positive, non-zero disambiguation index, in case this is called multiple times in the same
	 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
	 * want to use `0`.
	 */
	index: number;
}

/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 *
 * Requires a `Signed` origin
 *
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 *
 * Fails if there are insufficient funds to pay for deposit.
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
