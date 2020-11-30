**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / ["packages/txwrapper-substrate/src/methods/utility/asDerivative"](../modules/_packages_txwrapper_substrate_src_methods_utility_asderivative_.md) / UtilityAsDerivativeArgs

# Interface: UtilityAsDerivativeArgs

## Hierarchy

* {}

  ↳ **UtilityAsDerivativeArgs**

## Index

### Properties

* [call](_packages_txwrapper_substrate_src_methods_utility_asderivative_.utilityasderivativeargs.md#call)
* [index](_packages_txwrapper_substrate_src_methods_utility_asderivative_.utilityasderivativeargs.md#index)

## Properties

### call

•  **call**: { args?: undefined \| string ; callIndex?: undefined \| string  } \| string

*Defined in [packages/txwrapper-substrate/src/methods/utility/asDerivative.ts:19](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-substrate/src/methods/utility/asDerivative.ts#L19)*

The call to be dispatched from pseudonymous account derived from the origin.
To take advantage of txwrapper methods, this could be an array of
UnsignedTransaction.method.

___

### index

•  **index**: number \| string

*Defined in [packages/txwrapper-substrate/src/methods/utility/asDerivative.ts:13](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-substrate/src/methods/utility/asDerivative.ts#L13)*

The sub-account index of the origin.
