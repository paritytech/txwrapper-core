**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "txwrapper-substrate/src/methods/proxy/removeProxies"

# Module: "txwrapper-substrate/src/methods/proxy/removeProxies"

## Index

### Functions

* [removeProxies](_txwrapper_substrate_src_methods_proxy_removeproxies_.md#removeproxies)

## Functions

### removeProxies

▸ **removeProxies**(`args`: {}, `info`: [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)

*Defined in [packages/txwrapper-substrate/src/methods/proxy/removeProxies.ts:15](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-substrate/src/methods/proxy/removeProxies.ts#L15)*

Unregister all proxy accounts for the sender.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | {} | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)
