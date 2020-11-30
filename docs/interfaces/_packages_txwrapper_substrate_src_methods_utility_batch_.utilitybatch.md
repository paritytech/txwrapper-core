**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / ["packages/txwrapper-substrate/src/methods/utility/batch"](../modules/_packages_txwrapper_substrate_src_methods_utility_batch_.md) / UtilityBatch

# Interface: UtilityBatch

## Hierarchy

* {}

  ↳ **UtilityBatch**

## Index

### Properties

* [calls](_packages_txwrapper_substrate_src_methods_utility_batch_.utilitybatch.md#calls)

## Properties

### calls

•  **calls**: ({ args?: undefined \| string ; callIndex?: undefined \| string  } \| string)[]

*Defined in [packages/txwrapper-substrate/src/methods/utility/batch.ts:15](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-substrate/src/methods/utility/batch.ts#L15)*

The calls to be dispatched from the same origin.
To take advantage of txwrapper methods, this could be an array of
UnsignedTransaction.method.
