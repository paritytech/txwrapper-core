[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / balances

# Namespace: balances

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).balances

## Table of contents

### Interfaces

- [BalancesTransferAllArgs](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferAllArgs.md)
- [BalancesTransferAllowDeathArgs](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferAllowDeathArgs.md)
- [BalancesTransferArgs](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferArgs.md)

### Type Aliases

- [BalancesTransferKeepAliveArgs](txwrapper_substrate_src.methods.balances.md#balancestransferkeepaliveargs)

### Functions

- [transfer](txwrapper_substrate_src.methods.balances.md#transfer)
- [transferAll](txwrapper_substrate_src.methods.balances.md#transferall)
- [transferAllowDeath](txwrapper_substrate_src.methods.balances.md#transferallowdeath)
- [transferKeepAlive](txwrapper_substrate_src.methods.balances.md#transferkeepalive)

## Type Aliases

### BalancesTransferKeepAliveArgs

Ƭ **BalancesTransferKeepAliveArgs**: [`BalancesTransferArgs`](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferArgs.md)

#### Defined in

[txwrapper-substrate/src/methods/balances/transferKeepAlive.ts:10](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/balances/transferKeepAlive.ts#L10)

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

[txwrapper-substrate/src/methods/balances/transfer.ts:27](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/balances/transfer.ts#L27)

___

### transferAll

▸ **transferAll**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Transfer the entire transferable balance from the caller account.

NOTE: This function only attempts to transfer _transferable_ balances. This means that
any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
transferred by this function. To ensure that this function results in a killed account,
you might need to prepare the account by removing any reference counters, storage
deposits, etc...

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`BalancesTransferAllArgs`](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferAllArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/balances/transferAll.ts:37](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/balances/transferAll.ts#L37)

___

### transferAllowDeath

▸ **transferAllowDeath**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Construct a balance transfer transaction offline.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`BalancesTransferAllowDeathArgs`](../interfaces/txwrapper_substrate_src.methods.balances.BalancesTransferAllowDeathArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/balances/transferAllowDeath.ts:27](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/balances/transferAllowDeath.ts#L27)

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

[txwrapper-substrate/src/methods/balances/transferKeepAlive.ts:19](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/balances/transferKeepAlive.ts#L19)
