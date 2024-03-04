import { AnyJson } from '@polkadot/types/types';
import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface ForeignAssetsCancelApprovalArgs extends Args {
	/**
	 * The identifier of the foreignAsset.
	 */
	id: AnyJson;
	/**
	 * The account delegated permission to transfer foreignAsset.
	 */
	delegate: string;
}

/**
 * Cancel all of some foreignAsset approved for delegated transfer by a third-party account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function cancelApproval(
	args: ForeignAssetsCancelApprovalArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'cancelApproval',
				pallet: 'foreignAssets',
			},
			...info,
		},
		options,
	);
}
