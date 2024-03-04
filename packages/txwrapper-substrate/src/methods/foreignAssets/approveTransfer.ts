import { AnyJson } from '@polkadot/types/types';
import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface ForeignAssetsApproveTransferArgs extends Args {
	/**
	 * The identifier of the foreignAsset formatted as a MultiLocation.
	 */
	id: AnyJson;
	/**
	 * The account to delegate permission to transfer foreignAsset.
	 */
	delegate: string;
	/**
	 * The amount of foreignAsset that may be transferred by `delegate`. If there is
	 * already an approval in place, then this acts additively.
	 */
	amount: number | string;
}

/**
 * Approve an amount of foreignAssets for transfer by a delegated third-party account.
 *
 * NOTE: The signing account does not need to own `amount` of foreignAssets at the point of
 * making this call.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function approveTransfer(
	args: ForeignAssetsApproveTransferArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'approveTransfer',
				pallet: 'foreignAssets',
			},
			...info,
		},
		options,
	);
}
