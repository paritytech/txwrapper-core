import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface XcmReserveTransferAssets extends Args {
	/**
	 * Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
	 * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
	 */
	dest: string;
	/**
	 * A beneficiary location for the assets in the context of `dest`. Will generally be
	 * an `AccountId32` value.
	 */
	beneficiary: string;
	/**
	 * The assets to be withdrawn. This should include the assets used to pay the fee on the
	 * `dest` side.
	 */
	assets: string[];
	/**
	 * The index into `assets` of the item which should be used to pay
	 * fees.
	 */
	feeAssetsItem: number;
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 *
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function reserveTransferAssets(
	args: XcmReserveTransferAssets,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'reserveTransferAssets',
				pallet: 'xcm-pallet',
			},
			...info,
		},
		options
	);
}
