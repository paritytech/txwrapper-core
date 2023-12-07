[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-polkadot/src](../modules/txwrapper_polkadot_src.md) / [<internal\>](../modules/txwrapper_polkadot_src._internal_.md) / XcmBaseAssetArgs

# Interface: XcmBaseAssetArgs

[txwrapper-polkadot/src](../modules/txwrapper_polkadot_src.md).[<internal>](../modules/txwrapper_polkadot_src._internal_.md).XcmBaseAssetArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`XcmBaseAssetArgs`**

  ↳↳ [`LimitedXcmAssetArgs`](txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md)

## Table of contents

### Properties

- [assets](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md#assets)
- [beneficiary](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md#beneficiary)
- [dest](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md#dest)
- [feeAssetItem](txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md#feeassetitem)

## Properties

### assets

• **assets**: `AnyJson`

The assets to be withdrawn. This should include the assets used to pay the fee on the
`dest` side.

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/types.ts:19](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-polkadot/src/methods/xcmPallet/types.ts#L19)

___

### beneficiary

• **beneficiary**: `AnyJson`

A beneficiary location for the assets in the context of `dest`. Will generally be
an `AccountId32` value.

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/types.ts:14](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-polkadot/src/methods/xcmPallet/types.ts#L14)

___

### dest

• **dest**: `AnyJson`

Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/types.ts:9](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-polkadot/src/methods/xcmPallet/types.ts#L9)

___

### feeAssetItem

• **feeAssetItem**: `number`

The index into `assets` of the item which should be used to pay
fees.

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/types.ts:24](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-polkadot/src/methods/xcmPallet/types.ts#L24)
