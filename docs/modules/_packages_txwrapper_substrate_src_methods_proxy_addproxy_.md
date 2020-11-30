**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-substrate/src/methods/proxy/addProxy"

# Module: "packages/txwrapper-substrate/src/methods/proxy/addProxy"

## Index

### Interfaces

* [ProxyAddProxy](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_addproxy_.proxyaddproxy.md)

### Functions

* [addProxy](_packages_txwrapper_substrate_src_methods_proxy_addproxy_.md#addproxy)

## Functions

### addProxy

▸ **addProxy**(`args`: [ProxyAddProxy](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_addproxy_.proxyaddproxy.md), `info`: BaseTxInfo, `options`: OptionsWithMeta): UnsignedTransaction

*Defined in [packages/txwrapper-substrate/src/methods/proxy/addProxy.ts:32](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-substrate/src/methods/proxy/addProxy.ts#L32)*

Register a proxy account for the sender that is able to make calls on its behalf.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyAddProxy](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_addproxy_.proxyaddproxy.md) | Arguments specific to this method. |
`info` | BaseTxInfo | Information required to construct the transaction. |
`options` | OptionsWithMeta | Registry and metadata used for constructing the method.  |

**Returns:** UnsignedTransaction
