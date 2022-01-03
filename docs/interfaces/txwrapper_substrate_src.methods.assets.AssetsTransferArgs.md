[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [assets](../modules/txwrapper_substrate_src.methods.assets.md) / AssetsTransferArgs

# Interface: AssetsTransferArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[assets](../modules/txwrapper_substrate_src.methods.assets.md).AssetsTransferArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`AssetsTransferArgs`**

## Table of contents

### Properties

- [amount](txwrapper_substrate_src.methods.assets.AssetsTransferArgs.md#amount)
- [id](txwrapper_substrate_src.methods.assets.AssetsTransferArgs.md#id)
- [target](txwrapper_substrate_src.methods.assets.AssetsTransferArgs.md#target)

## Properties

### amount

• **amount**: `string` \| `number`

The amount by which the sender's balance of assets should be reduced and
`target`'s balance increased. The amount actually transferred may be slightly greater in
the case that the transfer would otherwise take the sender balance above zero but below
the minimum balance. Must be greater than zero.

#### Defined in

[txwrapper-substrate/src/methods/assets/transfer.ts:24](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-substrate/src/methods/assets/transfer.ts#L24)

___

### id

• **id**: `number`

The identifier of the asset to have some amount transferred.

#### Defined in

[txwrapper-substrate/src/methods/assets/transfer.ts:13](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-substrate/src/methods/assets/transfer.ts#L13)

___

### target

• **target**: `string`

The account to be credited.

#### Defined in

[txwrapper-substrate/src/methods/assets/transfer.ts:17](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-substrate/src/methods/assets/transfer.ts#L17)
