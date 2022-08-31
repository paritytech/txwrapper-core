import { AnyJson } from '@polkadot/types/types';
import { Args } from '@substrate/txwrapper-core';

export interface XcmBaseAssetArgs extends Args {
	/**
	 * Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
	 * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
	 */
	dest: AnyJson;
	/**
	 * A beneficiary location for the assets in the context of `dest`. Will generally be
	 * an `AccountId32` value.
	 */
	beneficiary: AnyJson;
	/**
	 * The assets to be withdrawn. This should include the assets used to pay the fee on the
	 * `dest` side.
	 */
	assets: AnyJson;
	/**
	 * The index into `assets` of the item which should be used to pay
	 * fees.
	 */
	feeAssetItem: number;
}
