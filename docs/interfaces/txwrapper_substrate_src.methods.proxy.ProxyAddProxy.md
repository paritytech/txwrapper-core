[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [proxy](../modules/txwrapper_substrate_src.methods.proxy.md) / ProxyAddProxy

# Interface: ProxyAddProxy

[methods](../modules/txwrapper_substrate_src.methods.md).[proxy](../modules/txwrapper_substrate_src.methods.proxy.md).ProxyAddProxy

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`ProxyAddProxy`**

## Table of contents

### Properties

- [delay](txwrapper_substrate_src.methods.proxy.ProxyAddProxy.md#delay)
- [delegate](txwrapper_substrate_src.methods.proxy.ProxyAddProxy.md#delegate)
- [proxyType](txwrapper_substrate_src.methods.proxy.ProxyAddProxy.md#proxytype)

## Properties

### delay

• **delay**: `string` \| `number`

The number of blocks that an announcement must be in place for before the corresponding call
may be dispatched. If zero, then no announcement is needed.

#### Defined in

[txwrapper-substrate/src/methods/proxy/addProxy.ts:22](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/proxy/addProxy.ts#L22)

___

### delegate

• **delegate**: `string`

The account that the `caller` would like to make a proxy.

#### Defined in

[txwrapper-substrate/src/methods/proxy/addProxy.ts:13](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/proxy/addProxy.ts#L13)

___

### proxyType

• **proxyType**: `string`

The permissions for this proxy account. See the chain's runtime for the `call` filters.

#### Defined in

[txwrapper-substrate/src/methods/proxy/addProxy.ts:17](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/proxy/addProxy.ts#L17)
