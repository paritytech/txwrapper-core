[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-polkadot/src](../modules/txwrapper_polkadot_src.md) / [\<internal\>](../modules/txwrapper_polkadot_src._internal_.md) / LimitedXcmAssetArgs

# Interface: LimitedXcmAssetArgs

[txwrapper-polkadot/src](../modules/txwrapper_polkadot_src.md).[\<internal\>](../modules/txwrapper_polkadot_src._internal_.md).LimitedXcmAssetArgs

Base Argument object for methods.

## Hierarchy

- [`XcmBaseAssetArgs`](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md)

  ↳ **`LimitedXcmAssetArgs`**

## Table of contents

### Properties

- [assets](txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md#assets)
- [beneficiary](txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md#beneficiary)
- [dest](txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md#dest)
- [feeAssetItem](txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md#feeassetitem)
- [weightLimit](txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md#weightlimit)

## Properties

### assets

• **assets**: `AnyJson`

The assets to be withdrawn. This should include the assets used to pay the fee on the
`dest` side.

#### Inherited from

[XcmBaseAssetArgs](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md).[assets](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md#assets)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/types.ts:19](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-polkadot/src/methods/xcmPallet/types.ts#L19)

___

### beneficiary

• **beneficiary**: `AnyJson`

A beneficiary location for the assets in the context of `dest`. Will generally be
an `AccountId32` value.

#### Inherited from

[XcmBaseAssetArgs](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md).[beneficiary](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md#beneficiary)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/types.ts:14](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-polkadot/src/methods/xcmPallet/types.ts#L14)

___

### dest

• **dest**: `AnyJson`

Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.

#### Inherited from

[XcmBaseAssetArgs](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md).[dest](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md#dest)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/types.ts:9](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-polkadot/src/methods/xcmPallet/types.ts#L9)

___

### feeAssetItem

• **feeAssetItem**: `number`

The index into `assets` of the item which should be used to pay
fees.

#### Inherited from

[XcmBaseAssetArgs](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md).[feeAssetItem](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md#feeassetitem)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/types.ts:24](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-polkadot/src/methods/xcmPallet/types.ts#L24)

___

### weightLimit

• **weightLimit**: \{ `Limited`: \{ `proofSize`: `string` ; `refTime`: `string`  }  } \| \{ `Unlimited`: ``null``  }

The remote-side weight limit, if any, for the XCM fee purchase.

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/types.ts:31](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-polkadot/src/methods/xcmPallet/types.ts#L31)
