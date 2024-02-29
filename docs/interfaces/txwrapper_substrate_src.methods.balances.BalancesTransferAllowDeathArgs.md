[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [balances](../modules/txwrapper_substrate_src.methods.balances.md) / BalancesTransferAllowDeathArgs

# Interface: BalancesTransferAllowDeathArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[balances](../modules/txwrapper_substrate_src.methods.balances.md).BalancesTransferAllowDeathArgs

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`BalancesTransferAllowDeathArgs`**

## Table of contents

### Properties

- [dest](txwrapper_substrate_src.methods.balances.BalancesTransferAllowDeathArgs.md#dest)
- [value](txwrapper_substrate_src.methods.balances.BalancesTransferAllowDeathArgs.md#value)

## Properties

### dest

• **dest**: `Object`

The recipient address, SS-58 encoded.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[txwrapper-substrate/src/methods/balances/transferAllowDeath.ts:13](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/balances/transferAllowDeath.ts#L13)

___

### value

• **value**: `string` \| `number`

The amount to send.

#### Defined in

[txwrapper-substrate/src/methods/balances/transferAllowDeath.ts:17](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/balances/transferAllowDeath.ts#L17)
