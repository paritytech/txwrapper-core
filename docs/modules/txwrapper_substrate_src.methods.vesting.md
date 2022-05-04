[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / vesting

# Namespace: vesting

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).vesting

## Table of contents

### Interfaces

- [VestingVestOtherArgs](../interfaces/txwrapper_substrate_src.methods.vesting.VestingVestOtherArgs.md)

### Functions

- [vest](txwrapper_substrate_src.methods.vesting.md#vest)
- [vestOther](txwrapper_substrate_src.methods.vesting.md#vestother)

## Functions

### vest

▸ **vest**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Unlock any vested funds of the sender account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/vesting/vest.ts:15](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-substrate/src/methods/vesting/vest.ts#L15)

___

### vestOther

▸ **vestOther**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Unlock any vested funds of a `target` account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`VestingVestOtherArgs`](../interfaces/txwrapper_substrate_src.methods.vesting.VestingVestOtherArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/vesting/vestOther.ts:24](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-substrate/src/methods/vesting/vestOther.ts#L24)
