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
	 * Wether or not to store the call in the pallet storage item `Calls`. Storing the call
	 * is normally only useful if this is the first approval, threshold > 1, and you
	 * want the call stored on chain so others can see. The call will always be
	 * removed from storage once the call is executed.
	 */
	// storeCall: boolean;
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 *
 * If there are enough, then dispatch the call.
 *
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 *
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 *
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
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
