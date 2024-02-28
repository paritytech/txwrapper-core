import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { MultiSignature } from './types';

export interface CrowdloanContributeArgs extends Args {
	index: number | string;
	value: number | string;
	signature: MultiSignature;
}

export function contribute(
	args: CrowdloanContributeArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'contribute',
				pallet: 'crowdloan',
			},
			...info,
		},
		options,
	);
}
