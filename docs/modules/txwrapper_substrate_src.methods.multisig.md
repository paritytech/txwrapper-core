[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / multisig

# Namespace: multisig

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).multisig

## Table of contents

### Interfaces

- [MultiSigApproveAsMulti](../interfaces/txwrapper_substrate_src.methods.multisig.MultiSigApproveAsMulti.md)
- [MultisigAsMulti](../interfaces/txwrapper_substrate_src.methods.multisig.MultisigAsMulti.md)
- [MultisigCancelAsMulti](../interfaces/txwrapper_substrate_src.methods.multisig.MultisigCancelAsMulti.md)

### Functions

- [approveAsMulti](txwrapper_substrate_src.methods.multisig.md#approveasmulti)
- [asMulti](txwrapper_substrate_src.methods.multisig.md#asmulti)
- [cancelAsMulti](txwrapper_substrate_src.methods.multisig.md#cancelasmulti)

## Functions

### approveAsMulti

▸ **approveAsMulti**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Register approval for a dispatch to be made from a deterministic composite account (i.e. multisig
account) if approved by a total of `threshold - 1` of `other_signatories`.

Payment: `DepositBase` will be reserved if this is the first approval, plus
`threshold` times `DepositFactor`. It is returned once this dispatch happens or
is cancelled.

NOTE: If this is the final approval, you must use `as_multi` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MultiSigApproveAsMulti`](../interfaces/txwrapper_substrate_src.methods.multisig.MultiSigApproveAsMulti.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/multisig/approveAsMulti.ts:51](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/multisig/approveAsMulti.ts#L51)

___

### asMulti

▸ **asMulti**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Register approval for a dispatch to be made from a deterministic composite account if
approved by a total of `threshold - 1` of `other_signatories`.

If there are enough, then dispatch the call.

Payment: `DepositBase` will be reserved if this is the first approval, plus
`threshold` times `DepositFactor`. It is returned once this dispatch happens or
is cancelled.

NOTE: Unless this is the final approval, you will generally want to use
`approve_as_multi` instead, since it only requires a hash of the call.

Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
on success, result is `Ok` and the result from the interior call, if it was executed,
may be found in the deposited `MultisigExecuted` event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MultisigAsMulti`](../interfaces/txwrapper_substrate_src.methods.multisig.MultisigAsMulti.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/multisig/asMulti.ts:39](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/multisig/asMulti.ts#L39)

___

### cancelAsMulti

▸ **cancelAsMulti**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
for this operation will be unreserved on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MultisigCancelAsMulti`](../interfaces/txwrapper_substrate_src.methods.multisig.MultisigCancelAsMulti.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/multisig/cancelAsMulti.ts:32](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/multisig/cancelAsMulti.ts#L32)
