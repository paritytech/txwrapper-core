**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/democracy/proxyVote"

# Module: "src/methods/democracy/proxyVote"

## Index

### Interfaces

* [DemocracyProxyVoteArgs](../interfaces/_src_methods_democracy_proxyvote_.democracyproxyvoteargs.md)

### Functions

* [proxyVote](_src_methods_democracy_proxyvote_.md#proxyvote)

## Functions

### proxyVote

▸ **proxyVote**(`args`: [DemocracyProxyVoteArgs](../interfaces/_src_methods_democracy_proxyvote_.democracyproxyvoteargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/democracy/proxyVote.ts:29](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/democracy/proxyVote.ts#L29)*

Vote in a referendum on behalf of a stash.

**`deprecated`** Update to the latest version of Substrate to use the proxy pallet.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyProxyVoteArgs](../interfaces/_src_methods_democracy_proxyvote_.democracyproxyvoteargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method. |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
