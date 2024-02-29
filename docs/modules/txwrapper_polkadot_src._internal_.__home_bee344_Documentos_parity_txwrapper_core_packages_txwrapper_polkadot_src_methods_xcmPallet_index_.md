[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-polkadot/src](txwrapper_polkadot_src.md) / [\<internal\>](txwrapper_polkadot_src._internal_.md) / "/home/bee344/Documentos/parity/txwrapper-core/packages/txwrapper-polkadot/src/methods/xcmPallet/index"

# Namespace: "/home/bee344/Documentos/parity/txwrapper-core/packages/txwrapper-polkadot/src/methods/xcmPallet/index"

[txwrapper-polkadot/src](txwrapper_polkadot_src.md).[\<internal\>](txwrapper_polkadot_src._internal_.md)."/home/bee344/Documentos/parity/txwrapper-core/packages/txwrapper-polkadot/src/methods/xcmPallet/index"

## Table of contents

### Type Aliases

- [XcmLimitedReserveTransferAssets](txwrapper_polkadot_src._internal_.__home_bee344_Documentos_parity_txwrapper_core_packages_txwrapper_polkadot_src_methods_xcmPallet_index_.md#xcmlimitedreservetransferassets)
- [XcmLimitedTeleportAssets](txwrapper_polkadot_src._internal_.__home_bee344_Documentos_parity_txwrapper_core_packages_txwrapper_polkadot_src_methods_xcmPallet_index_.md#xcmlimitedteleportassets)
- [XcmReserveTransferAssets](txwrapper_polkadot_src._internal_.__home_bee344_Documentos_parity_txwrapper_core_packages_txwrapper_polkadot_src_methods_xcmPallet_index_.md#xcmreservetransferassets)
- [XcmTeleportAssets](txwrapper_polkadot_src._internal_.__home_bee344_Documentos_parity_txwrapper_core_packages_txwrapper_polkadot_src_methods_xcmPallet_index_.md#xcmteleportassets)

### Functions

- [limitedReserveTransferAssets](txwrapper_polkadot_src._internal_.__home_bee344_Documentos_parity_txwrapper_core_packages_txwrapper_polkadot_src_methods_xcmPallet_index_.md#limitedreservetransferassets)
- [limitedTeleportAssets](txwrapper_polkadot_src._internal_.__home_bee344_Documentos_parity_txwrapper_core_packages_txwrapper_polkadot_src_methods_xcmPallet_index_.md#limitedteleportassets)
- [reserveTransferAssets](txwrapper_polkadot_src._internal_.__home_bee344_Documentos_parity_txwrapper_core_packages_txwrapper_polkadot_src_methods_xcmPallet_index_.md#reservetransferassets)
- [teleportAssets](txwrapper_polkadot_src._internal_.__home_bee344_Documentos_parity_txwrapper_core_packages_txwrapper_polkadot_src_methods_xcmPallet_index_.md#teleportassets)

## Type Aliases

### XcmLimitedReserveTransferAssets

Ƭ **XcmLimitedReserveTransferAssets**: [`LimitedXcmAssetArgs`](../interfaces/txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/limitedReserveTransferAssets.ts:10](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-polkadot/src/methods/xcmPallet/limitedReserveTransferAssets.ts#L10)

___

### XcmLimitedTeleportAssets

Ƭ **XcmLimitedTeleportAssets**: [`LimitedXcmAssetArgs`](../interfaces/txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/limitedTeleportAssets.ts:10](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-polkadot/src/methods/xcmPallet/limitedTeleportAssets.ts#L10)

___

### XcmReserveTransferAssets

Ƭ **XcmReserveTransferAssets**: [`XcmBaseAssetArgs`](../interfaces/txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/reserveTransferAssets.ts:10](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-polkadot/src/methods/xcmPallet/reserveTransferAssets.ts#L10)

___

### XcmTeleportAssets

Ƭ **XcmTeleportAssets**: [`XcmBaseAssetArgs`](../interfaces/txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/teleportAssets.ts:10](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-polkadot/src/methods/xcmPallet/teleportAssets.ts#L10)

## Functions

### limitedReserveTransferAssets

▸ **limitedReserveTransferAssets**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Transfer some assets from the local chain to the sovereign account of a destination
chain and forward a notification XCM.

Fee payment on the destination side is made from the asset in the `assets` vector of
index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
is needed than `weight_limit`, then the operation will fail and the assets send may be
at risk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`LimitedXcmAssetArgs`](../interfaces/txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/limitedReserveTransferAssets.ts:25](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-polkadot/src/methods/xcmPallet/limitedReserveTransferAssets.ts#L25)

___

### limitedTeleportAssets

▸ **limitedTeleportAssets**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Teleport some assets from the local chain to some destination chain.

Fee payment on the destination side is made from the asset in the `assets` vector of
index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
is needed than `weight_limit`, then the operation will fail and the assets send may be
at risk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`LimitedXcmAssetArgs`](../interfaces/txwrapper_polkadot_src._internal_.LimitedXcmAssetArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/limitedTeleportAssets.ts:24](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-polkadot/src/methods/xcmPallet/limitedTeleportAssets.ts#L24)

___

### reserveTransferAssets

▸ **reserveTransferAssets**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Transfer some assets from the local chain to the sovereign account of a destination
chain and forward a notification XCM.

Fee payment on the destination side is made from the asset in the `assets` vector of
index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
with all fees taken as needed from the asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`XcmBaseAssetArgs`](../interfaces/txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/reserveTransferAssets.ts:24](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-polkadot/src/methods/xcmPallet/reserveTransferAssets.ts#L24)

___

### teleportAssets

▸ **teleportAssets**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Teleport some assets from the local chain to some destination chain.

Fee payment on the destination side is made from the asset in the `assets` vector of
index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
with all fees taken as needed from the asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`XcmBaseAssetArgs`](../interfaces/txwrapper_polkadot_src._internal_.XcmBaseAssetArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-polkadot/src/methods/xcmPallet/teleportAssets.ts:23](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-polkadot/src/methods/xcmPallet/teleportAssets.ts#L23)
