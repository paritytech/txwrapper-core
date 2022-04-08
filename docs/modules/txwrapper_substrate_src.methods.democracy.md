[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / democracy

# Namespace: democracy

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).democracy

## Table of contents

### Interfaces

- [DemocracyVoteArgs](../interfaces/txwrapper_substrate_src.methods.democracy.DemocracyVoteArgs.md)

### Functions

- [vote](txwrapper_substrate_src.methods.democracy.md#vote)

## Functions

### vote

▸ **vote**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Vote in a referendum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`DemocracyVoteArgs`](../interfaces/txwrapper_substrate_src.methods.democracy.DemocracyVoteArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/democracy/vote.ts:29](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-substrate/src/methods/democracy/vote.ts#L29)
