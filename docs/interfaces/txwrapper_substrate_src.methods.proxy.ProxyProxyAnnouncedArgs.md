[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [proxy](../modules/txwrapper_substrate_src.methods.proxy.md) / ProxyProxyAnnouncedArgs

# Interface: ProxyProxyAnnouncedArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[proxy](../modules/txwrapper_substrate_src.methods.proxy.md).ProxyProxyAnnouncedArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`ProxyProxyAnnouncedArgs`**

## Table of contents

### Properties

- [call](txwrapper_substrate_src.methods.proxy.ProxyProxyAnnouncedArgs.md#call)
- [delegate](txwrapper_substrate_src.methods.proxy.ProxyProxyAnnouncedArgs.md#delegate)
- [forceProxyType](txwrapper_substrate_src.methods.proxy.ProxyProxyAnnouncedArgs.md#forceproxytype)
- [real](txwrapper_substrate_src.methods.proxy.ProxyProxyAnnouncedArgs.md#real)

## Properties

### call

• **call**: `string` \| { `args?`: `string` ; `callIndex?`: `string`  }

The call to be made by the `real` account.
To take advantage of txwrapper methods, this could be UnsignedTransaction.method.

#### Defined in

[txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:26](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L26)

___

### delegate

• **delegate**: `string`

The account that previously announced the call.

#### Defined in

[txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:13](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L13)

___

### forceProxyType

• **forceProxyType**: `string`

Specify the exact proxy type to be used and checked for this call.

#### Defined in

[txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:21](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L21)

___

### real

• **real**: `string`

The account that the proxy will make a call on behalf of.

#### Defined in

[txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:17](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L17)
