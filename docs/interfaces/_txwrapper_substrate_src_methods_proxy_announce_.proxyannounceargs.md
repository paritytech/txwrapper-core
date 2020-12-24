**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-substrate/src/methods/proxy/announce"](../modules/_txwrapper_substrate_src_methods_proxy_announce_.md) / ProxyAnnounceArgs

# Interface: ProxyAnnounceArgs

## Hierarchy

* {}

  ↳ **ProxyAnnounceArgs**

## Index

### Properties

* [callHash](_txwrapper_substrate_src_methods_proxy_announce_.proxyannounceargs.md#callhash)
* [real](_txwrapper_substrate_src_methods_proxy_announce_.proxyannounceargs.md#real)

## Properties

### callHash

•  **callHash**: string

*Defined in [packages/txwrapper-substrate/src/methods/proxy/announce.ts:17](https://github.com/paritytech/txwrapper-core/blob/731a943/packages/txwrapper-substrate/src/methods/proxy/announce.ts#L17)*

The hash of the call to be made by the `real` account.

___

### real

•  **real**: string

*Defined in [packages/txwrapper-substrate/src/methods/proxy/announce.ts:13](https://github.com/paritytech/txwrapper-core/blob/731a943/packages/txwrapper-substrate/src/methods/proxy/announce.ts#L13)*

The account that the proxy will make a call on behalf of.
