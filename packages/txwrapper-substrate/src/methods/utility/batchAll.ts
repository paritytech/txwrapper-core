import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { UtilityBatch } from './batch';

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls fail.
 *
 * May be called from any origin.
 *
 * If origin is root then calls are dispatch without checking origin filter.
 * (This includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 * @param args
 * @param info
 * @param options
 */
export function batchAll(
	args: UtilityBatch,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'batchAll',
				pallet: 'utility',
			},
			...info,
		},
		options,
	);
}
