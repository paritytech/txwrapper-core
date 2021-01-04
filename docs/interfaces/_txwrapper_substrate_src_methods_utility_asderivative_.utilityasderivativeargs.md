**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-substrate/src/methods/utility/asDerivative"](../modules/_txwrapper_substrate_src_methods_utility_asderivative_.md) / UtilityAsDerivativeArgs

# Interface: UtilityAsDerivativeArgs

## Hierarchy

* {}

  ↳ **UtilityAsDerivativeArgs**

## Index

### Properties

* [call](_txwrapper_substrate_src_methods_utility_asderivative_.utilityasderivativeargs.md#call)
* [index](_txwrapper_substrate_src_methods_utility_asderivative_.utilityasderivativeargs.md#index)

## Properties

### call

•  **call**: { args?: undefined \| string ; callIndex?: undefined \| string  } \| string

*Defined in [packages/txwrapper-substrate/src/methods/utility/asDerivative.ts:19](https://github.com/paritytech/txwrapper-core/blob/15c9541/packages/txwrapper-substrate/src/methods/utility/asDerivative.ts#L19)*

The call to be dispatched from pseudonymous account derived from the origin.
To take advantage of txwrapper methods, this could be an array of
UnsignedTransaction.method.

___

### index

•  **index**: number \| string

*Defined in [packages/txwrapper-substrate/src/methods/utility/asDerivative.ts:13](https://github.com/paritytech/txwrapper-core/blob/15c9541/packages/txwrapper-substrate/src/methods/utility/asDerivative.ts#L13)*

The sub-account index of the origin.
