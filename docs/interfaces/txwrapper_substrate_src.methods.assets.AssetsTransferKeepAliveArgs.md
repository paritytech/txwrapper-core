[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [assets](../modules/txwrapper_substrate_src.methods.assets.md) / AssetsTransferKeepAliveArgs

# Interface: AssetsTransferKeepAliveArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[assets](../modules/txwrapper_substrate_src.methods.assets.md).AssetsTransferKeepAliveArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`AssetsTransferKeepAliveArgs`**

## Table of contents

### Properties

- [amount](txwrapper_substrate_src.methods.assets.AssetsTransferKeepAliveArgs.md#amount)
- [id](txwrapper_substrate_src.methods.assets.AssetsTransferKeepAliveArgs.md#id)
- [target](txwrapper_substrate_src.methods.assets.AssetsTransferKeepAliveArgs.md#target)

## Properties

### amount

• **amount**: `string` \| `number`

The amount by which the sender's balance of assets should be reduced and
`target`'s balance increased. The amount actually transferred may be slightly greater in
the case that the transfer would otherwise take the sender balance above zero but below
the minimum balance. Must be greater than zero.

#### Defined in

[txwrapper-substrate/src/methods/assets/transferKeepAlive.ts:24](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/assets/transferKeepAlive.ts#L24)

___

### id

• **id**: `number`

The identifier of the asset to have some amount transferred.

#### Defined in

[txwrapper-substrate/src/methods/assets/transferKeepAlive.ts:13](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/assets/transferKeepAlive.ts#L13)

___

### target

• **target**: `string`

The account to be credited.

#### Defined in

[txwrapper-substrate/src/methods/assets/transferKeepAlive.ts:17](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/assets/transferKeepAlive.ts#L17)
