**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/proxy/addProxy"

# Module: "src/methods/proxy/addProxy"

## Index

### Interfaces

* [ProxyAddProxy](../interfaces/_src_methods_proxy_addproxy_.proxyaddproxy.md)

### Functions

* [addProxy](_src_methods_proxy_addproxy_.md#addproxy)

## Functions

### addProxy

▸ **addProxy**(`args`: [ProxyAddProxy](../interfaces/_src_methods_proxy_addproxy_.proxyaddproxy.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/proxy/addProxy.ts:37](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/addProxy.ts#L37)*

Register a proxy account for the sender that is able to make calls on its behalf.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyAddProxy](../interfaces/_src_methods_proxy_addproxy_.proxyaddproxy.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
