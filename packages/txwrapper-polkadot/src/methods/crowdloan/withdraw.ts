import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface CroadloanWithdrawArgs extends Args {
	who: string;
	index: number | string;
}

export function withdraw(
	args: CroadloanWithdrawArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'withdraw',
				pallet: 'crowdloan',
			},
			...info,
		},
		options,
	);
}
