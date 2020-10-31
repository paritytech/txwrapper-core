**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/proxy/proxy"

# Module: "src/methods/proxy/proxy"

## Index

### Interfaces

* [ProxyProxy](../interfaces/_src_methods_proxy_proxy_.proxyproxy.md)

### Functions

* [proxy](_src_methods_proxy_proxy_.md#proxy)

## Functions

### proxy

▸ **proxy**(`args`: [ProxyProxy](../interfaces/_src_methods_proxy_proxy_.proxyproxy.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/proxy/proxy.ts:33](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/proxy.ts#L33)*

Dispatch the given `call` from an account for which the sender is authorized.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyProxy](../interfaces/_src_methods_proxy_proxy_.proxyproxy.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
