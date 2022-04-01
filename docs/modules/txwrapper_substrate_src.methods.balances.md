[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / balances

# Namespace: balances

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).balances

## Table of contents

### Interfaces

- [BalancesTransferArgs](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferArgs.md)

### Type aliases

- [BalancesTransferKeepAliveArgs](txwrapper_substrate_src.methods.balances.md#balancestransferkeepaliveargs)

### Functions

- [transfer](txwrapper_substrate_src.methods.balances.md#transfer)
- [transferKeepAlive](txwrapper_substrate_src.methods.balances.md#transferkeepalive)

## Type aliases

### BalancesTransferKeepAliveArgs

Ƭ **BalancesTransferKeepAliveArgs**: [`BalancesTransferArgs`](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferArgs.md)

#### Defined in

[txwrapper-substrate/src/methods/balances/transferKeepAlive.ts:10](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-substrate/src/methods/balances/transferKeepAlive.ts#L10)

## Functions

### transfer

▸ **transfer**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Construct a balance transfer transaction offline.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`BalancesTransferArgs`](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/balances/transfer.ts:27](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-substrate/src/methods/balances/transfer.ts#L27)

___

### transferKeepAlive

▸ **transferKeepAlive**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Construct a balance transfer transaction offline.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`BalancesTransferArgs`](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/balances/transferKeepAlive.ts:19](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-substrate/src/methods/balances/transferKeepAlive.ts#L19)
