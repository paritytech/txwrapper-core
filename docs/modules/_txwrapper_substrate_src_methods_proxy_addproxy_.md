**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "txwrapper-substrate/src/methods/proxy/addProxy"

# Module: "txwrapper-substrate/src/methods/proxy/addProxy"

## Index

### Interfaces

* [ProxyAddProxy](../interfaces/_txwrapper_substrate_src_methods_proxy_addproxy_.proxyaddproxy.md)

### Functions

* [addProxy](_txwrapper_substrate_src_methods_proxy_addproxy_.md#addproxy)

## Functions

### addProxy

▸ **addProxy**(`args`: [ProxyAddProxy](../interfaces/_txwrapper_substrate_src_methods_proxy_addproxy_.proxyaddproxy.md), `info`: [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)

*Defined in [packages/txwrapper-substrate/src/methods/proxy/addProxy.ts:32](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-substrate/src/methods/proxy/addProxy.ts#L32)*

Register a proxy account for the sender that is able to make calls on its behalf.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyAddProxy](../interfaces/_txwrapper_substrate_src_methods_proxy_addproxy_.proxyaddproxy.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)
