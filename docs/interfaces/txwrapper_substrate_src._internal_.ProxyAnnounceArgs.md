[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [\<internal\>](../modules/txwrapper_substrate_src._internal_.md) / ProxyAnnounceArgs

# Interface: ProxyAnnounceArgs

[txwrapper-substrate/src](../modules/txwrapper_substrate_src.md).[\<internal\>](../modules/txwrapper_substrate_src._internal_.md).ProxyAnnounceArgs

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`ProxyAnnounceArgs`**

## Table of contents

### Properties

- [callHash](txwrapper_substrate_src._internal_.ProxyAnnounceArgs.md#callhash)
- [real](txwrapper_substrate_src._internal_.ProxyAnnounceArgs.md#real)

## Properties

### callHash

• **callHash**: `string`

The hash of the call to be made by the `real` account.

#### Defined in

[txwrapper-substrate/src/methods/proxy/announce.ts:17](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/proxy/announce.ts#L17)

___

### real

• **real**: `string`

The account that the proxy will make a call on behalf of.

#### Defined in

[txwrapper-substrate/src/methods/proxy/announce.ts:13](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/proxy/announce.ts#L13)
