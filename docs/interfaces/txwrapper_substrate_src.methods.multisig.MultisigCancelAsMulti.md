[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [multisig](../modules/txwrapper_substrate_src.methods.multisig.md) / MultisigCancelAsMulti

# Interface: MultisigCancelAsMulti

[methods](../modules/txwrapper_substrate_src.methods.md).[multisig](../modules/txwrapper_substrate_src.methods.multisig.md).MultisigCancelAsMulti

## Hierarchy

- `Omit`<[`MultiSigApproveAsMulti`](txwrapper_substrate_src.methods.multisig.MultiSigApproveAsMulti.md), ``"maxWeight"`` \| ``"maybeTimepoint"``\>

  ↳ **`MultisigCancelAsMulti`**

## Table of contents

### Properties

- [callHash](txwrapper_substrate_src.methods.multisig.MultisigCancelAsMulti.md#callhash)
- [timepoint](txwrapper_substrate_src.methods.multisig.MultisigCancelAsMulti.md#timepoint)

## Properties

### callHash

• **callHash**: `string`

The hash of the call to be executed.

#### Defined in

[txwrapper-substrate/src/methods/multisig/cancelAsMulti.ts:21](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/multisig/cancelAsMulti.ts#L21)

___

### timepoint

• **timepoint**: [`Timepoint`](../modules/txwrapper_substrate_src._internal_.md#timepoint)

The timepoint (block number and transaction index) of the first approval
transaction for this dispatch.

#### Defined in

[txwrapper-substrate/src/methods/multisig/cancelAsMulti.ts:17](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/multisig/cancelAsMulti.ts#L17)
