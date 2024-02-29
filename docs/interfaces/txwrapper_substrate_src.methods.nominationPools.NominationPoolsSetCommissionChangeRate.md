[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md) / NominationPoolsSetCommissionChangeRate

# Interface: NominationPoolsSetCommissionChangeRate

[methods](../modules/txwrapper_substrate_src.methods.md).[nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md).NominationPoolsSetCommissionChangeRate

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`NominationPoolsSetCommissionChangeRate`**

## Table of contents

### Properties

- [changeRate](txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommissionChangeRate.md#changerate)
- [poolId](txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommissionChangeRate.md#poolid)

## Properties

### changeRate

• **changeRate**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxIncrease` | `string` | The maximum amount the commission can be updated by per `min_delay` period. |
| `minDelay` | `string` \| `number` | How often an update can take place. |

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setCommissionChangeRate.ts:14](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/nominationPools/setCommissionChangeRate.ts#L14)

___

### poolId

• **poolId**: `string` \| `number`

A valid PoolId.

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setCommissionChangeRate.ts:13](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/nominationPools/setCommissionChangeRate.ts#L13)
