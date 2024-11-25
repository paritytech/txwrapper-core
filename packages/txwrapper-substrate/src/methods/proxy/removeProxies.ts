import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * Unregister all proxy accounts for the sender.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function removeProxies(
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	args: {},
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'removeProxies',
				pallet: 'proxy',
			},
			...info,
		},
		options,
	);
}
