[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [utility](../modules/txwrapper_substrate_src.methods.utility.md) / UtilityBatch

# Interface: UtilityBatch

[methods](../modules/txwrapper_substrate_src.methods.md).[utility](../modules/txwrapper_substrate_src.methods.utility.md).UtilityBatch

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`UtilityBatch`**

## Table of contents

### Properties

- [calls](txwrapper_substrate_src.methods.utility.UtilityBatch.md#calls)

## Properties

### calls

• **calls**: (`string` \| \{ `args?`: `string` ; `callIndex?`: `string`  })[]

The calls to be dispatched from the same origin.
To take advantage of txwrapper methods, this could be an array of
UnsignedTransaction.method.

#### Defined in

[txwrapper-substrate/src/methods/utility/batch.ts:15](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/utility/batch.ts#L15)
