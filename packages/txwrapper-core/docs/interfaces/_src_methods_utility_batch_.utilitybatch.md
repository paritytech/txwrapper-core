**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/methods/utility/batch"](../modules/_src_methods_utility_batch_.md) / UtilityBatch

# Interface: UtilityBatch

## Hierarchy

* {}

  ↳ **UtilityBatch**

## Index

### Properties

* [calls](_src_methods_utility_batch_.utilitybatch.md#calls)

## Properties

### calls

•  **calls**: ({ args?: undefined \| string ; callIndex?: undefined \| string  } \| string)[]

*Defined in [src/methods/utility/batch.ts:15](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/utility/batch.ts#L15)*

The calls to be dispatched from the same origin.
To take advantage of txwrapper methods, this could be an array of
UnsignedTransaction.method.
