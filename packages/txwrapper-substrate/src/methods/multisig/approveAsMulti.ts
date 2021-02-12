import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { Timepoint } from './types';

export interface MultiSigApproveAsMulti extends Args {
	/**
	 * The total number of approvals required for this dispatch before it is executed.
	 */
	threshold: number | string;
	/**
	 * The accounts (other than the sender) who can approve this dispatch.
	 * May not be empty.
	 */
	otherSignatories: string[];
	/**
	 * If this is the first approval, then this must be `null`. If it is not the first
	 * approval, then it must be the timepoint (block number and transaction index) of the first
	 * approving transaction.
	 */
	maybeTimepoint: null | Timepoint;
	/**
	 * The hash of the call to be executed.
	 */
	callHash: string;
	/**
	 * Maximium weight the call being approved may consume.
	 */
	maxWeight: string | number;
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 *
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 *
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function approveAsMulti(
	args: MultiSigApproveAsMulti,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'approveAsMulti',
				pallet: 'multisig',
			},
			...info,
		},
		options
	);
}
