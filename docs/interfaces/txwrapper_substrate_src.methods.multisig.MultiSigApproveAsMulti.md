[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [multisig](../modules/txwrapper_substrate_src.methods.multisig.md) / MultiSigApproveAsMulti

# Interface: MultiSigApproveAsMulti

[methods](../modules/txwrapper_substrate_src.methods.md).[multisig](../modules/txwrapper_substrate_src.methods.multisig.md).MultiSigApproveAsMulti

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`MultiSigApproveAsMulti`**

## Table of contents

### Properties

- [callHash](txwrapper_substrate_src.methods.multisig.MultiSigApproveAsMulti.md#callhash)
- [maxWeight](txwrapper_substrate_src.methods.multisig.MultiSigApproveAsMulti.md#maxweight)
- [maybeTimepoint](txwrapper_substrate_src.methods.multisig.MultiSigApproveAsMulti.md#maybetimepoint)
- [otherSignatories](txwrapper_substrate_src.methods.multisig.MultiSigApproveAsMulti.md#othersignatories)
- [threshold](txwrapper_substrate_src.methods.multisig.MultiSigApproveAsMulti.md#threshold)

## Properties

### callHash

• **callHash**: `string`

The hash of the call to be executed.

#### Defined in

[txwrapper-substrate/src/methods/multisig/approveAsMulti.ts:30](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/multisig/approveAsMulti.ts#L30)

___

### maxWeight

• **maxWeight**: `string` \| `number`

Maximium weight the call being approved may consume.

#### Defined in

[txwrapper-substrate/src/methods/multisig/approveAsMulti.ts:34](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/multisig/approveAsMulti.ts#L34)

___

### maybeTimepoint

• **maybeTimepoint**: ``null`` \| [`Timepoint`](../modules/txwrapper_substrate_src._internal_.md#timepoint)

If this is the first approval, then this must be `null`. If it is not the first
approval, then it must be the timepoint (block number and transaction index) of the first
approving transaction.

#### Defined in

[txwrapper-substrate/src/methods/multisig/approveAsMulti.ts:26](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/multisig/approveAsMulti.ts#L26)

___

### otherSignatories

• **otherSignatories**: `string`[]

The accounts (other than the sender) who can approve this call.
May not be empty.

#### Defined in

[txwrapper-substrate/src/methods/multisig/approveAsMulti.ts:20](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/multisig/approveAsMulti.ts#L20)

___

### threshold

• **threshold**: `string` \| `number`

The total number of approvals required for this dispatch before it is executed.

#### Defined in

[txwrapper-substrate/src/methods/multisig/approveAsMulti.ts:15](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/multisig/approveAsMulti.ts#L15)
