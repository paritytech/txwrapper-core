**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/democracy/openProxy"

# Module: "src/methods/democracy/openProxy"

## Index

### Interfaces

* [DemocracyOpenProxyArgs](../interfaces/_src_methods_democracy_openproxy_.democracyopenproxyargs.md)

### Functions

* [openProxy](_src_methods_democracy_openproxy_.md#openproxy)

## Functions

### openProxy

▸ **openProxy**(`args`: [DemocracyOpenProxyArgs](../interfaces/_src_methods_democracy_openproxy_.democracyopenproxyargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/democracy/openProxy.ts:24](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/democracy/openProxy.ts#L24)*

Become a proxy. This must be called prior to a later `activateProxy`.

**`deprecated`** Update to the latest version of Substrate to use the proxy pallet.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyOpenProxyArgs](../interfaces/_src_methods_democracy_openproxy_.democracyopenproxyargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method. |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
