**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/proxy/removeProxy"

# Module: "src/methods/proxy/removeProxy"

## Index

### Interfaces

* [ProxyRemoveProxy](../interfaces/_src_methods_proxy_removeproxy_.proxyremoveproxy.md)

### Functions

* [removeProxy](_src_methods_proxy_removeproxy_.md#removeproxy)

## Functions

### removeProxy

▸ **removeProxy**(`args`: [ProxyRemoveProxy](../interfaces/_src_methods_proxy_removeproxy_.proxyremoveproxy.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/proxy/removeProxy.ts:32](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/removeProxy.ts#L32)*

Unregister a proxy account for the sender.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyRemoveProxy](../interfaces/_src_methods_proxy_removeproxy_.proxyremoveproxy.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
