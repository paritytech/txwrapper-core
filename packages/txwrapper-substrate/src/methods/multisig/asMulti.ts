import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { MultiSigApproveAsMulti } from './approveAsMulti';

export interface MultisigAsMulti
	extends Omit<MultiSigApproveAsMulti, 'callHash'> {
	/**
	 * The call to be executed as a SCALE encoded hex string.
	 */
	call: string;
	/**
	 * Wether or not to store the call.
	 */
	storeCall: boolean;
}

export function asMulti(
	args: MultisigAsMulti,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'asMulti',
				pallet: 'multisig',
			},
			...info,
		},
		options
	);
}
