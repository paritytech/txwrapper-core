[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / system

# Namespace: system

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).system

## Table of contents

### Interfaces

- [SystemRemarkArgs](../interfaces/txwrapper_substrate_src.methods.system.SystemRemarkArgs.md)

### Functions

- [remark](txwrapper_substrate_src.methods.system.md#remark)

## Functions

### remark

▸ **remark**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Make some on-chain remark.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SystemRemarkArgs`](../interfaces/txwrapper_substrate_src.methods.system.SystemRemarkArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/system/remark.ts:23](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-substrate/src/methods/system/remark.ts#L23)
