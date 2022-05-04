[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [assets](../modules/txwrapper_substrate_src.methods.assets.md) / AssetsTransferApprovedArgs

# Interface: AssetsTransferApprovedArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[assets](../modules/txwrapper_substrate_src.methods.assets.md).AssetsTransferApprovedArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`AssetsTransferApprovedArgs`**

## Table of contents

### Properties

- [amount](txwrapper_substrate_src.methods.assets.AssetsTransferApprovedArgs.md#amount)
- [destination](txwrapper_substrate_src.methods.assets.AssetsTransferApprovedArgs.md#destination)
- [id](txwrapper_substrate_src.methods.assets.AssetsTransferApprovedArgs.md#id)
- [owner](txwrapper_substrate_src.methods.assets.AssetsTransferApprovedArgs.md#owner)

## Properties

### amount

• **amount**: `string` \| `number`

The amount of assets to transfer.

#### Defined in

[txwrapper-substrate/src/methods/assets/transferApproved.ts:26](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-substrate/src/methods/assets/transferApproved.ts#L26)

___

### destination

• **destination**: `string`

The account to which the asset balance of `amount` will be transferred.

#### Defined in

[txwrapper-substrate/src/methods/assets/transferApproved.ts:22](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-substrate/src/methods/assets/transferApproved.ts#L22)

___

### id

• **id**: `number`

The identifier of the asset.

#### Defined in

[txwrapper-substrate/src/methods/assets/transferApproved.ts:13](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-substrate/src/methods/assets/transferApproved.ts#L13)

___

### owner

• **owner**: `string`

The account which previously approved for a transfer of at least `amount` and
from which the asset balance will be withdrawn.

#### Defined in

[txwrapper-substrate/src/methods/assets/transferApproved.ts:18](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-substrate/src/methods/assets/transferApproved.ts#L18)
