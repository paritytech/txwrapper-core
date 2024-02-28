import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { MultiSigApproveAsMulti } from './approveAsMulti';
import { Timepoint } from './types';

export interface MultisigCancelAsMulti
	extends Omit<MultiSigApproveAsMulti, 'maxWeight' | 'maybeTimepoint'> {
	/**
	 * The timepoint (block number and transaction index) of the first approval
	 * transaction for this dispatch.
	 */
	timepoint: Timepoint;
	/**
	 * The hash of the call to be executed.
	 */
	callHash: string;
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function cancelAsMulti(
	args: MultisigCancelAsMulti,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'cancelAsMulti',
				pallet: 'multisig',
			},
			...info,
		},
		options,
	);
}
