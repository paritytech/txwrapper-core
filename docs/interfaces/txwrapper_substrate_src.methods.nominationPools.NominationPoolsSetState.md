[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md) / NominationPoolsSetState

# Interface: NominationPoolsSetState

[methods](../modules/txwrapper_substrate_src.methods.md).[nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md).NominationPoolsSetState

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`NominationPoolsSetState`**

## Table of contents

### Properties

- [poolId](txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetState.md#poolid)
- [state](txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetState.md#state)

## Properties

### poolId

• **poolId**: `string` \| `number`

A valid PoolId.

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setState.ts:13](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setState.ts#L13)

___

### state

• **state**: `string`

The following state of the pool.
This can be set to `Open` | `Blocked` | `Destorying`.

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setState.ts:18](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setState.ts#L18)
