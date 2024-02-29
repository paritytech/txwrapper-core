[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md) / NominationPoolsBondExtraOther

# Interface: NominationPoolsBondExtraOther

[methods](../modules/txwrapper_substrate_src.methods.md).[nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md).NominationPoolsBondExtraOther

Base Argument object for methods.

## Hierarchy

- [`NominationPoolsBondExtra`](txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtra.md)

  ↳ **`NominationPoolsBondExtraOther`**

## Table of contents

### Properties

- [extra](txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtraOther.md#extra)
- [member](txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtraOther.md#member)

## Properties

### extra

• **extra**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `FreeBalance` | ``null`` \| `string` | Take from the free balance. |
| `Rewards` | ``null`` \| `boolean` | Take the entire amount from the accumulated rewards. |

#### Inherited from

[NominationPoolsBondExtra](txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtra.md).[extra](txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtra.md#extra)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/bondExtra.ts:10](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/nominationPools/bondExtra.ts#L10)

___

### member

• **member**: `string`

AccountId.

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/bondExtraOther.ts:15](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/nominationPools/bondExtraOther.ts#L15)
