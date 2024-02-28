import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface BalancesTransferAllArgs extends Args {
	/**
	 * The recipient of the transfer.
	 */
	dest: { id: string };

	/**
	 * A boolean to determine if the `transfer_all` operation should send all
	 * of the funds the account has, causing the sender account to be killed (false), or
	 * transfer everything except at least the existential deposit, which will guarantee to
	 * keep the sender account alive (true).
	 */
	keepAlive: boolean;
}

/**
 * Transfer the entire transferable balance from the caller account.
 *
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function transferAll(
	args: BalancesTransferAllArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transferAll',
				pallet: 'balances',
			},
			...info,
		},
		options,
	);
}
