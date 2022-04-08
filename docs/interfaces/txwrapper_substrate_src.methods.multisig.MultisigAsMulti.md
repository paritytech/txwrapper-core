[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [multisig](../modules/txwrapper_substrate_src.methods.multisig.md) / MultisigAsMulti

# Interface: MultisigAsMulti

[methods](../modules/txwrapper_substrate_src.methods.md).[multisig](../modules/txwrapper_substrate_src.methods.multisig.md).MultisigAsMulti

## Hierarchy

- `Omit`<[`MultiSigApproveAsMulti`](txwrapper_substrate_src.methods.multisig.MultiSigApproveAsMulti.md), ``"callHash"``\>

  ↳ **`MultisigAsMulti`**

## Table of contents

### Properties

- [call](txwrapper_substrate_src.methods.multisig.MultisigAsMulti.md#call)
- [storeCall](txwrapper_substrate_src.methods.multisig.MultisigAsMulti.md#storecall)

## Properties

### call

• **call**: `string`

The call to be executed as a SCALE encoded hex string.

#### Defined in

[txwrapper-substrate/src/methods/multisig/asMulti.ts:15](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-substrate/src/methods/multisig/asMulti.ts#L15)

___

### storeCall

• **storeCall**: `boolean`

Wether or not to store the call in the pallet storage item `Calls`. Storing the call
is normally only useful if this is the first approval, threshold > 1, and you
want the call stored on chain so others can see. The call will always be
removed from storage once the call is executed.

#### Defined in

[txwrapper-substrate/src/methods/multisig/asMulti.ts:22](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-substrate/src/methods/multisig/asMulti.ts#L22)
