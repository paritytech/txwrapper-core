import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface ProxyRejectAnnouncementArgs extends Args {
	/**
	 * The account that previously announced the call.
	 */
	delegate: string;
	/**
	 * The hash of the call that the proxy wants to execute.
	 */
	callHash: string;
}

/**
 * Remove the given announcement of a delegate and return the deposit. Made by the proxied account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function rejectAnnouncement(
	args: ProxyRejectAnnouncementArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'rejectAnnouncement',
				pallet: 'proxy',
			},
			...info,
		},
		options,
	);
}
