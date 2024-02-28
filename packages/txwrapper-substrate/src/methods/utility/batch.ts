import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface UtilityBatch extends Args {
	/**
	 * The calls to be dispatched from the same origin.
	 * To take advantage of txwrapper methods, this could be an array of
	 * UnsignedTransaction.method.
	 */
	calls: ({ callIndex?: string; args?: string } | string)[];
}

export function batch(
	args: UtilityBatch,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'batch',
				pallet: 'utility',
			},
			...info,
		},
		options,
	);
}
