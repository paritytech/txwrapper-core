**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / ["packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced"](../modules/_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.md) / ProxyProxyAnnouncedArgs

# Interface: ProxyProxyAnnouncedArgs

## Hierarchy

* {}

  ↳ **ProxyProxyAnnouncedArgs**

## Index

### Properties

* [call](_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md#call)
* [delegate](_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md#delegate)
* [forceProxyType](_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md#forceproxytype)
* [real](_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md#real)

## Properties

### call

•  **call**: { args?: undefined \| string ; callIndex?: undefined \| string  } \| string

*Defined in [packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:26](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L26)*

The call to be made by the `real` account.
To take advantage of txwrapper methods, this could be UnsignedTransaction.method.

___

### delegate

•  **delegate**: string

*Defined in [packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:13](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L13)*

The account that previously announced the call.

___

### forceProxyType

•  **forceProxyType**: string

*Defined in [packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:21](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L21)*

Specify the exact proxy type to be used and checked for this call.

___

### real

•  **real**: string

*Defined in [packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:17](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L17)*

The account that the proxy will make a call on behalf of.
