[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [utility](../modules/txwrapper_substrate_src.methods.utility.md) / UtilityAsDerivativeArgs

# Interface: UtilityAsDerivativeArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[utility](../modules/txwrapper_substrate_src.methods.utility.md).UtilityAsDerivativeArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`UtilityAsDerivativeArgs`**

## Table of contents

### Properties

- [call](txwrapper_substrate_src.methods.utility.UtilityAsDerivativeArgs.md#call)
- [index](txwrapper_substrate_src.methods.utility.UtilityAsDerivativeArgs.md#index)

## Properties

### call

• **call**: `string` \| { `args?`: `string` ; `callIndex?`: `string`  }

The call to be dispatched from pseudonymous account derived from the origin.
To take advantage of txwrapper methods, this could be an array of
UnsignedTransaction.method.

#### Defined in

[txwrapper-substrate/src/methods/utility/asDerivative.ts:19](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/utility/asDerivative.ts#L19)

___

### index

• **index**: `string` \| `number`

The sub-account index of the origin.

#### Defined in

[txwrapper-substrate/src/methods/utility/asDerivative.ts:13](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/utility/asDerivative.ts#L13)
