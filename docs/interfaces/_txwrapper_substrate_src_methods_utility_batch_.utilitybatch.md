**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-substrate/src/methods/utility/batch"](../modules/_txwrapper_substrate_src_methods_utility_batch_.md) / UtilityBatch

# Interface: UtilityBatch

## Hierarchy

* {}

  ↳ **UtilityBatch**

## Index

### Properties

* [calls](_txwrapper_substrate_src_methods_utility_batch_.utilitybatch.md#calls)

## Properties

### calls

•  **calls**: ({ args?: undefined \| string ; callIndex?: undefined \| string  } \| string)[]

*Defined in [packages/txwrapper-substrate/src/methods/utility/batch.ts:15](https://github.com/paritytech/txwrapper-core/blob/731a943/packages/txwrapper-substrate/src/methods/utility/batch.ts#L15)*

The calls to be dispatched from the same origin.
To take advantage of txwrapper methods, this could be an array of
UnsignedTransaction.method.
