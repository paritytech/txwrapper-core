**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/methods/utility/asDerivative"](../modules/_src_methods_utility_asderivative_.md) / UtilityAsDerivativeArgs

# Interface: UtilityAsDerivativeArgs

## Hierarchy

* {}

  ↳ **UtilityAsDerivativeArgs**

## Index

### Properties

* [call](_src_methods_utility_asderivative_.utilityasderivativeargs.md#call)
* [index](_src_methods_utility_asderivative_.utilityasderivativeargs.md#index)

## Properties

### call

•  **call**: { args?: undefined \| string ; callIndex?: undefined \| string  } \| string

*Defined in [src/methods/utility/asDerivative.ts:19](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/utility/asDerivative.ts#L19)*

The call to be dispatched from pseudonym account derived from the origin.
To take advantage of txwrapper methods, this could be an array of
UnsignedTransaction.method.

___

### index

•  **index**: number \| string

*Defined in [src/methods/utility/asDerivative.ts:13](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/utility/asDerivative.ts#L13)*

The sub-account index of the origin.
