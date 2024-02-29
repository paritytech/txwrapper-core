[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md) / NominationPoolsSetCommission

# Interface: NominationPoolsSetCommission

[methods](../modules/txwrapper_substrate_src.methods.md).[nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md).NominationPoolsSetCommission

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`NominationPoolsSetCommission`**

## Table of contents

### Properties

- [newCommission](txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommission.md#newcommission)
- [poolId](txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommission.md#poolid)

## Properties

### newCommission

• **newCommission**: ``null`` \| [`string`, `string`]

Set the new commission.
If a `None` is supplied to `new_commission`, existing commission will be removed.

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setCommission.ts:18](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/nominationPools/setCommission.ts#L18)

___

### poolId

• **poolId**: `string` \| `number`

A valid PoolId.

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setCommission.ts:13](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/nominationPools/setCommission.ts#L13)
