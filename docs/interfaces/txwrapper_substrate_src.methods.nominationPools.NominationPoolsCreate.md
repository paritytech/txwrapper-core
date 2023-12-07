[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md) / NominationPoolsCreate

# Interface: NominationPoolsCreate

[methods](../modules/txwrapper_substrate_src.methods.md).[nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md).NominationPoolsCreate

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`NominationPoolsCreate`**

  ↳↳ [`NominationPoolsCreateWithPoolId`](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreateWithPoolId.md)

## Table of contents

### Properties

- [amount](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md#amount)
- [bouncer](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md#bouncer)
- [nominator](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md#nominator)
- [root](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md#root)

## Properties

### amount

• **amount**: `string`

The amount of funds to delegate to the pool. This also acts of a sort of
deposit since the pools creator cannot fully unbond funds until the pool is being
destroyed.

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/create.ts:15](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/nominationPools/create.ts#L15)

___

### bouncer

• **bouncer**: `string`

The account to set as the [`PoolRoles::bouncer`].

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/create.ts:27](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/nominationPools/create.ts#L27)

___

### nominator

• **nominator**: `string`

The account to set as the [`PoolRoles::nominator`].

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/create.ts:23](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/nominationPools/create.ts#L23)

___

### root

• **root**: `string`

The account to set as [`PoolRoles::root`].

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/create.ts:19](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/nominationPools/create.ts#L19)
