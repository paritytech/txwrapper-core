[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [session](../modules/txwrapper_substrate_src.methods.session.md) / SessionSetKeysArgs

# Interface: SessionSetKeysArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[session](../modules/txwrapper_substrate_src.methods.session.md).SessionSetKeysArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`SessionSetKeysArgs`**

## Table of contents

### Properties

- [keys](txwrapper_substrate_src.methods.session.SessionSetKeysArgs.md#keys)
- [proof](txwrapper_substrate_src.methods.session.SessionSetKeysArgs.md#proof)

## Properties

### keys

• **keys**: `Object`

The 5 keys to set.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority_discovery` | `string` |
| `babe` | `string` |
| `grandpa` | `string` |
| `im_online` | `string` |
| `para_assignment` | `string` |
| `para_validator` | `string` |

#### Defined in

[txwrapper-substrate/src/methods/session/setKeys.ts:13](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/session/setKeys.ts#L13)

___

### proof

• `Optional` **proof**: `string`

Proof of key ownership (currently unused).

#### Defined in

[txwrapper-substrate/src/methods/session/setKeys.ts:24](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/session/setKeys.ts#L24)
