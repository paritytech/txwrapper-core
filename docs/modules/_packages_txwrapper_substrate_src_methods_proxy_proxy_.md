**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-substrate/src/methods/proxy/proxy"

# Module: "packages/txwrapper-substrate/src/methods/proxy/proxy"

## Index

### Interfaces

* [ProxyProxy](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_proxy_.proxyproxy.md)

### Functions

* [proxy](_packages_txwrapper_substrate_src_methods_proxy_proxy_.md#proxy)

## Functions

### proxy

▸ **proxy**(`args`: [ProxyProxy](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_proxy_.proxyproxy.md), `info`: BaseTxInfo, `options`: OptionsWithMeta): UnsignedTransaction

*Defined in [packages/txwrapper-substrate/src/methods/proxy/proxy.ts:33](https://github.com/paritytech/txwrapper-core/blob/1c09a0e/packages/txwrapper-substrate/src/methods/proxy/proxy.ts#L33)*

Dispatch the given `call` from an account for which the sender is authorized.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyProxy](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_proxy_.proxyproxy.md) | Arguments specific to this method. |
`info` | BaseTxInfo | Information required to construct the transaction. |
`options` | OptionsWithMeta | Registry and metadata used for constructing the method.  |

**Returns:** UnsignedTransaction
