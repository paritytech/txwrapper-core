**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/democracy/activateProxy"

# Module: "src/methods/democracy/activateProxy"

## Index

### Interfaces

* [DemocracyActivateProxyArgs](../interfaces/_src_methods_democracy_activateproxy_.democracyactivateproxyargs.md)

### Functions

* [activateProxy](_src_methods_democracy_activateproxy_.md#activateproxy)

## Functions

### activateProxy

▸ **activateProxy**(`args`: [DemocracyActivateProxyArgs](../interfaces/_src_methods_democracy_activateproxy_.democracyactivateproxyargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/democracy/activateProxy.ts:24](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/democracy/activateProxy.ts#L24)*

Specify a proxy that is already open to us. Called by the stash.

**`deprecated`** Update to the latest version of Substrate to use the proxy pallet.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyActivateProxyArgs](../interfaces/_src_methods_democracy_activateproxy_.democracyactivateproxyargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method. |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
