**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/methods/proxy/addProxy"](../modules/_src_methods_proxy_addproxy_.md) / ProxyAddProxy

# Interface: ProxyAddProxy

## Hierarchy

* {}

  ↳ **ProxyAddProxy**

## Index

### Properties

* [delay](_src_methods_proxy_addproxy_.proxyaddproxy.md#delay)
* [delegate](_src_methods_proxy_addproxy_.proxyaddproxy.md#delegate)
* [proxyType](_src_methods_proxy_addproxy_.proxyaddproxy.md#proxytype)

## Properties

### delay

•  **delay**: number \| string

*Defined in [src/methods/proxy/addProxy.ts:27](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/addProxy.ts#L27)*

The number of blocks that an announcement must be in place for before the corresponding call
may be dispatched. If zero, then no announcement is needed.

___

### delegate

•  **delegate**: string

*Defined in [src/methods/proxy/addProxy.ts:13](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/addProxy.ts#L13)*

The account that the `caller` would like to make a proxy.

___

### proxyType

•  **proxyType**: string

*Defined in [src/methods/proxy/addProxy.ts:22](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/addProxy.ts#L22)*

The permissions for this proxy account. See the runtime for the `call` filters.
Current known types:
  - 'Any'
  - 'NonTransfer'
  - 'Governance'
  - 'Staking'
