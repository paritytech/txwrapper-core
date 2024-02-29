[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [balances](../modules/txwrapper_substrate_src.methods.balances.md) / BalancesTransferAllArgs

# Interface: BalancesTransferAllArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[balances](../modules/txwrapper_substrate_src.methods.balances.md).BalancesTransferAllArgs

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`BalancesTransferAllArgs`**

## Table of contents

### Properties

- [dest](txwrapper_substrate_src.methods.balances.BalancesTransferAllArgs.md#dest)
- [keepAlive](txwrapper_substrate_src.methods.balances.BalancesTransferAllArgs.md#keepalive)

## Properties

### dest

• **dest**: `Object`

The recipient of the transfer.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[txwrapper-substrate/src/methods/balances/transferAll.ts:13](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/balances/transferAll.ts#L13)

___

### keepAlive

• **keepAlive**: `boolean`

A boolean to determine if the `transfer_all` operation should send all
of the funds the account has, causing the sender account to be killed (false), or
transfer everything except at least the existential deposit, which will guarantee to
keep the sender account alive (true).

#### Defined in

[txwrapper-substrate/src/methods/balances/transferAll.ts:21](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/balances/transferAll.ts#L21)
