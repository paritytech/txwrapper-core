[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [assets](../modules/txwrapper_substrate_src.methods.assets.md) / AssetsApproveTransferArgs

# Interface: AssetsApproveTransferArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[assets](../modules/txwrapper_substrate_src.methods.assets.md).AssetsApproveTransferArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`AssetsApproveTransferArgs`**

## Table of contents

### Properties

- [amount](txwrapper_substrate_src.methods.assets.AssetsApproveTransferArgs.md#amount)
- [delegate](txwrapper_substrate_src.methods.assets.AssetsApproveTransferArgs.md#delegate)
- [id](txwrapper_substrate_src.methods.assets.AssetsApproveTransferArgs.md#id)

## Properties

### amount

• **amount**: `string` \| `number`

The amount of asset that may be transferred by `delegate`. If there is
already an approval in place, then this acts additively.

#### Defined in

[txwrapper-substrate/src/methods/assets/approveTransfer.ts:22](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/assets/approveTransfer.ts#L22)

___

### delegate

• **delegate**: `string`

The account to delegate permission to transfer asset.

#### Defined in

[txwrapper-substrate/src/methods/assets/approveTransfer.ts:17](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/assets/approveTransfer.ts#L17)

___

### id

• **id**: `number`

The identifier of the asset.

#### Defined in

[txwrapper-substrate/src/methods/assets/approveTransfer.ts:13](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/assets/approveTransfer.ts#L13)
