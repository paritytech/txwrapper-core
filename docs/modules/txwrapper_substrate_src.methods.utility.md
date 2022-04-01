[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / utility

# Namespace: utility

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).utility

## Table of contents

### Interfaces

- [UtilityAsDerivativeArgs](../interfaces/txwrapper_substrate_src.methods.utility.UtilityAsDerivativeArgs.md)
- [UtilityBatch](../interfaces/txwrapper_substrate_src.methods.utility.UtilityBatch.md)

### Functions

- [asDerivative](txwrapper_substrate_src.methods.utility.md#asderivative)
- [batch](txwrapper_substrate_src.methods.utility.md#batch)
- [batchAll](txwrapper_substrate_src.methods.utility.md#batchall)

## Functions

### asDerivative

▸ **asDerivative**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Send a call through an indexed pseudonym of the sender. In other words, send a call through a
derivative account of the signer. The signer will need to have an already existing index derived
account in order to succesfully execute this call.

Each account has 2**16 possible "pseudonyms" (alternative account IDs) and these can be
stacked. This can be useful as a key management tool, where you need multiple distinct accounts
(e.g. as controllers for many staking accounts), but where it's perfectly fine to have each of
them controlled by the same underlying keypair.

Derivative accounts are, for the purposes of proxy filtering considered exactly
the same as the oigin and are thus hampered with the origin's filters.

NOTE: If you need to ensure that any account-based filtering is ignored (i.e.
because you expect `proxy` to have been used prior in the call stack and you do not want
the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
in the Multisig pallet instead.

NOTE: Prior to version *12, this was called `as_limited_sub`.

The dispatch origin for this call must be _Signed_.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`UtilityAsDerivativeArgs`](../interfaces/txwrapper_substrate_src.methods.utility.UtilityAsDerivativeArgs.md) |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/utility/asDerivative.ts:48](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-substrate/src/methods/utility/asDerivative.ts#L48)

___

### batch

▸ **batch**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`UtilityBatch`](../interfaces/txwrapper_substrate_src.methods.utility.UtilityBatch.md) |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/utility/batch.ts:18](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-substrate/src/methods/utility/batch.ts#L18)

___

### batchAll

▸ **batchAll**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Send a batch of dispatch calls and atomically execute them.
The whole transaction will rollback and fail if any of the calls fail.

May be called from any origin.

If origin is root then calls are dispatch without checking origin filter.
(This includes bypassing `frame_system::Config::BaseCallFilter`).

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`UtilityBatch`](../interfaces/txwrapper_substrate_src.methods.utility.UtilityBatch.md) |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/utility/batchAll.ts:23](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-substrate/src/methods/utility/batchAll.ts#L23)
