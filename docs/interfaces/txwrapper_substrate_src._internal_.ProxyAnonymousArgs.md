[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [<internal\>](../modules/txwrapper_substrate_src._internal_.md) / ProxyAnonymousArgs

# Interface: ProxyAnonymousArgs

[txwrapper-substrate/src](../modules/txwrapper_substrate_src.md).[<internal>](../modules/txwrapper_substrate_src._internal_.md).ProxyAnonymousArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`ProxyAnonymousArgs`**

## Table of contents

### Properties

- [delay](txwrapper_substrate_src._internal_.ProxyAnonymousArgs.md#delay)
- [index](txwrapper_substrate_src._internal_.ProxyAnonymousArgs.md#index)
- [proxyType](txwrapper_substrate_src._internal_.ProxyAnonymousArgs.md#proxytype)

## Properties

### delay

• **delay**: `number`

The announcement period (measured in number of blocks) required of the initial proxy.
Will generally be zero.

#### Defined in

[txwrapper-substrate/src/methods/proxy/anonymous.ts:20](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/proxy/anonymous.ts#L20)

___

### index

• **index**: `number`

A positive, non-zero disambiguation index, in case this is called multiple times in the same
transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
want to use `0`.

#### Defined in

[txwrapper-substrate/src/methods/proxy/anonymous.ts:26](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/proxy/anonymous.ts#L26)

___

### proxyType

• **proxyType**: `string`

The type of the proxy that the sender will be registered as over the
new account. This will almost always be the most permissive `ProxyType` possible to
allow for maximum flexibility. (`ProxyType` variants vary by runtime.)

#### Defined in

[txwrapper-substrate/src/methods/proxy/anonymous.ts:15](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/proxy/anonymous.ts#L15)
