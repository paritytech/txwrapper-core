[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / assets

# Namespace: assets

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).assets

## Table of contents

### Interfaces

- [AssetsApproveTransferArgs](../interfaces/txwrapper_substrate_src.methods.assets.AssetsApproveTransferArgs.md)
- [AssetsCancelApprovalArgs](../interfaces/txwrapper_substrate_src.methods.assets.AssetsCancelApprovalArgs.md)
- [AssetsTransferApprovedArgs](../interfaces/txwrapper_substrate_src.methods.assets.AssetsTransferApprovedArgs.md)
- [AssetsTransferArgs](../interfaces/txwrapper_substrate_src.methods.assets.AssetsTransferArgs.md)
- [AssetsTransferKeepAliveArgs](../interfaces/txwrapper_substrate_src.methods.assets.AssetsTransferKeepAliveArgs.md)

### Functions

- [approveTransfer](txwrapper_substrate_src.methods.assets.md#approvetransfer)
- [cancelApproval](txwrapper_substrate_src.methods.assets.md#cancelapproval)
- [transfer](txwrapper_substrate_src.methods.assets.md#transfer)
- [transferApproved](txwrapper_substrate_src.methods.assets.md#transferapproved)
- [transferKeepAlive](txwrapper_substrate_src.methods.assets.md#transferkeepalive)

## Functions

### approveTransfer

▸ **approveTransfer**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Approve an amount of asset for transfer by a delegated third-party account.

NOTE: The signing account does not need to own `amount` of assets at the point of
making this call.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`AssetsApproveTransferArgs`](../interfaces/txwrapper_substrate_src.methods.assets.AssetsApproveTransferArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/assets/approveTransfer.ts:35](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-substrate/src/methods/assets/approveTransfer.ts#L35)

___

### cancelApproval

▸ **cancelApproval**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Cancel all of some asset approved for delegated transfer by a third-party account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`AssetsCancelApprovalArgs`](../interfaces/txwrapper_substrate_src.methods.assets.AssetsCancelApprovalArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/assets/cancelApproval.ts:27](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-substrate/src/methods/assets/cancelApproval.ts#L27)

___

### transfer

▸ **transfer**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Move some assets from the sender account to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`AssetsTransferArgs`](../interfaces/txwrapper_substrate_src.methods.assets.AssetsTransferArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/assets/transfer.ts:34](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-substrate/src/methods/assets/transfer.ts#L34)

___

### transferApproved

▸ **transferApproved**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Transfer some asset balance from a previously delegated account to some third-party
account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`AssetsTransferApprovedArgs`](../interfaces/txwrapper_substrate_src.methods.assets.AssetsTransferApprovedArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/assets/transferApproved.ts:37](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-substrate/src/methods/assets/transferApproved.ts#L37)

___

### transferKeepAlive

▸ **transferKeepAlive**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Move some assets from the sender account to another, keeping the sender account alive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`AssetsTransferKeepAliveArgs`](../interfaces/txwrapper_substrate_src.methods.assets.AssetsTransferKeepAliveArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/assets/transferKeepAlive.ts:34](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-substrate/src/methods/assets/transferKeepAlive.ts#L34)
