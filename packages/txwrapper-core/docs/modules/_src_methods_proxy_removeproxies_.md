**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/proxy/removeProxies"

# Module: "src/methods/proxy/removeProxies"

## Index

### Functions

* [removeProxies](_src_methods_proxy_removeproxies_.md#removeproxies)

## Functions

### removeProxies

▸ **removeProxies**(`args`: {}, `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/proxy/removeProxies.ts:15](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/removeProxies.ts#L15)*

Unregister all proxy accounts for the sender.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | {} | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
