import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface CrowdloanAddMemo extends Args {
	index: number | string;
	memo: string;
}

export function addMemo(
	args: CrowdloanAddMemo,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'addMemo',
				pallet: 'crowdloan',
			},
			...info,
		},
		options,
	);
}
