**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/methods/proxy/proxyAnnounced"](../modules/_src_methods_proxy_proxyannounced_.md) / ProxyProxyAnnouncedArgs

# Interface: ProxyProxyAnnouncedArgs

## Hierarchy

* {}

  ↳ **ProxyProxyAnnouncedArgs**

## Index

### Properties

* [call](_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md#call)
* [delegate](_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md#delegate)
* [forceProxyType](_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md#forceproxytype)
* [real](_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md#real)

## Properties

### call

•  **call**: { args?: undefined \| string ; callIndex?: undefined \| string  } \| string

*Defined in [src/methods/proxy/proxyAnnounced.ts:26](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/proxyAnnounced.ts#L26)*

The call to be made by the `real` account.
To take advantage of txwrapper methods, this could be UnsignedTransaction.method.

___

### delegate

•  **delegate**: string

*Defined in [src/methods/proxy/proxyAnnounced.ts:13](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/proxyAnnounced.ts#L13)*

The account that previously announced the call.

___

### forceProxyType

•  **forceProxyType**: string

*Defined in [src/methods/proxy/proxyAnnounced.ts:21](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/proxyAnnounced.ts#L21)*

Specify the exact proxy type to be used and checked for this call.

___

### real

•  **real**: string

*Defined in [src/methods/proxy/proxyAnnounced.ts:17](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/proxyAnnounced.ts#L17)*

The account that the proxy will make a call on behalf of.
