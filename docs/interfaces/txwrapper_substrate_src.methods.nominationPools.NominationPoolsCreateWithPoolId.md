[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md) / NominationPoolsCreateWithPoolId

# Interface: NominationPoolsCreateWithPoolId

[methods](../modules/txwrapper_substrate_src.methods.md).[nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md).NominationPoolsCreateWithPoolId

Base Argument object for methods.

## Hierarchy

- [`NominationPoolsCreate`](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md)

  ↳ **`NominationPoolsCreateWithPoolId`**

## Table of contents

### Properties

- [amount](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreateWithPoolId.md#amount)
- [bouncer](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreateWithPoolId.md#bouncer)
- [nominator](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreateWithPoolId.md#nominator)
- [poolId](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreateWithPoolId.md#poolid)
- [root](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreateWithPoolId.md#root)

## Properties

### amount

• **amount**: `string`

The amount of funds to delegate to the pool. This also acts of a sort of
deposit since the pools creator cannot fully unbond funds until the pool is being
destroyed.

#### Inherited from

[NominationPoolsCreate](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md).[amount](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md#amount)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/create.ts:15](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/create.ts#L15)

___

### bouncer

• **bouncer**: `string`

The account to set as the [`PoolRoles::bouncer`].

#### Inherited from

[NominationPoolsCreate](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md).[bouncer](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md#bouncer)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/create.ts:27](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/create.ts#L27)

___

### nominator

• **nominator**: `string`

The account to set as the [`PoolRoles::nominator`].

#### Inherited from

[NominationPoolsCreate](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md).[nominator](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md#nominator)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/create.ts:23](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/create.ts#L23)

___

### poolId

• **poolId**: `string` \| `number`

A valid PoolId.

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/createWithPoolId.ts:14](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/createWithPoolId.ts#L14)

___

### root

• **root**: `string`

The account to set as [`PoolRoles::root`].

#### Inherited from

[NominationPoolsCreate](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md).[root](txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md#root)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/create.ts:19](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/create.ts#L19)
