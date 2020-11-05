import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface UtilityAsDerivativeArgs extends Args {
	/**
	 * The sub-account index of the origin.
	 */
	index: number | string;
	/**
	 * The call to be dispatched from pseudonym account derived from the origin.
	 * To take advantage of txwrapper methods, this could be an array of
	 * UnsignedTransaction.method.
	 */
	call: { callIndex?: string; args?: string } | string;
}

/**
 * Send a call through an indexed pseudonym of the sender.
 *
 * Proxy filters from the origin are passed along. The call will be dispatched
 * with an origin which uses the same proxy filters as the origin of this call.
 *
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 *
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * @param args
 * @param info
 * @param options
 */
export function asDerivative(
	args: UtilityAsDerivativeArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'asDerivative',
				pallet: 'utility',
			},
			...info,
		},
		options
	);
}
