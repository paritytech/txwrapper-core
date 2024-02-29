[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md) / NominationPoolsBondExtra

# Interface: NominationPoolsBondExtra

[methods](../modules/txwrapper_substrate_src.methods.md).[nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md).NominationPoolsBondExtra

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`NominationPoolsBondExtra`**

  ↳↳ [`NominationPoolsBondExtraOther`](txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtraOther.md)

## Table of contents

### Properties

- [extra](txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtra.md#extra)

## Properties

### extra

• **extra**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `FreeBalance` | ``null`` \| `string` | Take from the free balance. |
| `Rewards` | ``null`` \| `boolean` | Take the entire amount from the accumulated rewards. |

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/bondExtra.ts:10](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/bondExtra.ts#L10)
