import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

/**
 * TODO: Confirm the 'type' enum field for each enum
 *       Translate these types to TS primitives, and expose them within the args types. 
 * 		 This is also the same as teleport Assets so these types should be within a types file within
 * 		 this directory and exported and extended as such. 
 * dest -> XcmVersionedMultiLocation
 * 			-> XcmV0MultiLocation
 * 				-> XcmV0Junction | XcmV0Junction[]
 * 					-> Parachain:      Compact<u32> | 
 * 					   AccountId32:    { network: XcmV0JunctionNetworkId, id: u8aFixed } |
 * 					   AccountIndex64: { network: XcmV0JunctionNetworkId, index: Compact<u64> } |
 * 					   AccountKey20:   { network: XcmV0JunctionNetworkId, key: U8aFixed } |
 * 									   -> XcmV0JunctionNetworkId
 * 											-> Named: Bytes
 * 											-> type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
 * 					   PalletInstance: u8 |
 * 					   GeneralIndex:   Compact<u128>
 * 					   GeneralKey:     Bytes
 *					   Plurality:      { id: XcmV0JunctionBodyId, part: XcmV0JunctionBodyPart } |
 *									   -> XcmV0JunctionBodyPart
 *									   		-> Members:  		   { count: Compact<u32> } |
 *											   Fraction: 		   { nom: Compact<u32>, denom: Compact<u32> } |
 *											   LeastProportion:    { nom: Compact<u32>, denom: Compact<u32> } |
 * 											   MoreThanProportion: { nom: Compact<u32>, denom: Compact<u32> }
 * 									   -> XcmV0JunctionBodyId
 * 											-> Named: Bytes
 * 											   Index: Compact<u32>
 * 			-> XcmV1MultiLocation: { parents: u8, interior: XcmV1MultilocationJunctions }
 * 				-> XcmV1MultilocationJunctions
 * 					-> XcmV1Junction | XcmV1Junction[]
 * 						SAME AS XcmV0Junction!
 * 
 * beneficiary -> XcmVersionedMultiLocation
 * 					-> The rest is the same as the above.
 * 
 * assets -> XcmVersionedMultiAssets
 * 		  		-> Vec<XcmV0MultiAsset>
 * 					-> XcmV0MultiAsset
 * 						-> AllAbstractFungible:    { id: Bytes } |
 * 					   	   AllAbstractNonFungible: { class: Bytes } |
 *	 					   AllConcreteFungible:    { id: XcmV0MultiLocation } |
 *  					   AllConcreteNonFungible: { class: XcmV0MultiLocation } |
 *  					   ConcreteFungible:       { id: XcmV0MultiLocation, amount: Compact<u128> }
 *  					   ConcreteNonFungible:    { class: XcmV0MultiLocation, instance: XcmV1MultiassetAssetInstance }
 *  					   -> XcmV0MultiLocation
 *  					   		-> SAME AS ABOVE in `dest`
 *  					   -> XcmV1MultiassetAssetInstance
 *  							-> Index:   Compact<u128> |
 *  							   Array4:  U8aFixed |
 *  							   Array8:  U8aFixed |
 *  							   Array16: U8aFixed |
 *  							   Array32: U8aFixed |
 *  							   Blob:    Bytes
 *  					   AbstractFungible:       { id: Bytes, amount: Compact<u32> } |
 *  					   AbstractNonFungible:    { class: Bytes , instance: XcmV1MultiassetAssetInstance }
 * 				-> XcmV1MultiassetMultiAssets
 * 					-> Vec<XcmV1MultiAsset>
 * 						-> { id: XcmV1MultiassetAssetId, fun: XcmV1MultiassetFungibility }
 * 							-> XcmV1MultiassetAssetId
 * 								-> Concrete: XcmV1MultiLocation
 * 									-> XcmV1MultiLocation
 * 										-> SAME AS ABOVE `dest`
 * 								-> Abstract: Bytes
 * 							-> XcmV1MultiassetFungibility
 * 								-> Fungible:    Compact<u128> |
 * 								   NonFungible: XcmV1MultiassetAssetInstance
 * 								   		-> XcmV1MultiassetAssetInstance
 * 											-> SAME AS ABOVE
 * 
 * feeAssetsItem -> u32interface XcmVersionedMultiAssets
 */

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
