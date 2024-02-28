import {
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

import { XcmBaseAssetArgs } from './types';

export type XcmTeleportAssets = XcmBaseAssetArgs;

/**
 * Teleport some assets from the local chain to some destination chain.
 *
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function teleportAssets(
	args: XcmTeleportAssets,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'teleportAssets',
				pallet: 'xcmPallet',
			},
			...info,
		},
		options,
	);
}
