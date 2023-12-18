[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [proxy](../modules/txwrapper_substrate_src.methods.proxy.md) / ProxyProxy

# Interface: ProxyProxy

[methods](../modules/txwrapper_substrate_src.methods.md).[proxy](../modules/txwrapper_substrate_src.methods.proxy.md).ProxyProxy

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`ProxyProxy`**

## Table of contents

### Properties

- [call](txwrapper_substrate_src.methods.proxy.ProxyProxy.md#call)
- [forceProxyType](txwrapper_substrate_src.methods.proxy.ProxyProxy.md#forceproxytype)
- [real](txwrapper_substrate_src.methods.proxy.ProxyProxy.md#real)

## Properties

### call

• **call**: `string` \| { `args?`: `string` ; `callIndex?`: `string`  }

The call to be made by the `real` account.
To take advantage of txwrapper methods, this could be UnsignedTransaction.method.

#### Defined in

[txwrapper-substrate/src/methods/proxy/proxy.ts:23](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/proxy/proxy.ts#L23)

___

### forceProxyType

• **forceProxyType**: `string`

Specify the exact proxy type to be used and checked for this call.

#### Defined in

[txwrapper-substrate/src/methods/proxy/proxy.ts:18](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/proxy/proxy.ts#L18)

___

### real

• **real**: `string`

Dispatch the given `call` from an account that the sender is authorized for
through, `add_proxy`.

#### Defined in

[txwrapper-substrate/src/methods/proxy/proxy.ts:14](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/proxy/proxy.ts#L14)
