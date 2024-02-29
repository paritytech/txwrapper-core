[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [\<internal\>](../modules/txwrapper_substrate_src._internal_.md) / ProxyKillPureArgs

# Interface: ProxyKillPureArgs

[txwrapper-substrate/src](../modules/txwrapper_substrate_src.md).[\<internal\>](../modules/txwrapper_substrate_src._internal_.md).ProxyKillPureArgs

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`ProxyKillPureArgs`**

## Table of contents

### Properties

- [extIndex](txwrapper_substrate_src._internal_.ProxyKillPureArgs.md#extindex)
- [height](txwrapper_substrate_src._internal_.ProxyKillPureArgs.md#height)
- [index](txwrapper_substrate_src._internal_.ProxyKillPureArgs.md#index)
- [proxyType](txwrapper_substrate_src._internal_.ProxyKillPureArgs.md#proxytype)
- [spawner](txwrapper_substrate_src._internal_.ProxyKillPureArgs.md#spawner)

## Properties

### extIndex

• **extIndex**: `number`

The extrinsic index in which the call to `createPure` was processed.

#### Defined in

[txwrapper-substrate/src/methods/proxy/killPure.ts:29](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/proxy/killPure.ts#L29)

___

### height

• **height**: `number`

The height of the chain when the call to `createPure` was processed.

#### Defined in

[txwrapper-substrate/src/methods/proxy/killPure.ts:25](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/proxy/killPure.ts#L25)

___

### index

• **index**: `number`

The disambiguation index originally passed to `createPure`. Probably `0`

#### Defined in

[txwrapper-substrate/src/methods/proxy/killPure.ts:21](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/proxy/killPure.ts#L21)

___

### proxyType

• **proxyType**: `string`

The proxy type originally passed to `createPure`.

#### Defined in

[txwrapper-substrate/src/methods/proxy/killPure.ts:17](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/proxy/killPure.ts#L17)

___

### spawner

• **spawner**: `string`

The account that originally called `createPure` to create this account.

#### Defined in

[txwrapper-substrate/src/methods/proxy/killPure.ts:13](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/proxy/killPure.ts#L13)
