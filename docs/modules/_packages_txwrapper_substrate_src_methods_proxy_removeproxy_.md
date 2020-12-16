**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-substrate/src/methods/proxy/removeProxy"

# Module: "packages/txwrapper-substrate/src/methods/proxy/removeProxy"

## Index

### Functions

* [removeProxy](_packages_txwrapper_substrate_src_methods_proxy_removeproxy_.md#removeproxy)

## Functions

### removeProxy

▸ **removeProxy**(`args`: [ProxyAddProxy](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_addproxy_.proxyaddproxy.md), `info`: BaseTxInfo, `options`: OptionsWithMeta): UnsignedTransaction

*Defined in [packages/txwrapper-substrate/src/methods/proxy/removeProxy.ts:17](https://github.com/paritytech/txwrapper-core/blob/1c09a0e/packages/txwrapper-substrate/src/methods/proxy/removeProxy.ts#L17)*

Unregister a proxy account for the sender.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyAddProxy](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_addproxy_.proxyaddproxy.md) | Arguments specific to this method. |
`info` | BaseTxInfo | Information required to construct the transaction. |
`options` | OptionsWithMeta | Registry and metadata used for constructing the method.  |

**Returns:** UnsignedTransaction
