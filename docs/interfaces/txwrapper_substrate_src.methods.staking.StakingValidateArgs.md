[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [staking](../modules/txwrapper_substrate_src.methods.staking.md) / StakingValidateArgs

# Interface: StakingValidateArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[staking](../modules/txwrapper_substrate_src.methods.staking.md).StakingValidateArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`StakingValidateArgs`**

## Table of contents

### Properties

- [prefs](txwrapper_substrate_src.methods.staking.StakingValidateArgs.md#prefs)

## Properties

### prefs

• **prefs**: `Object`

Set the desired commission for the validator. Value is Perbill.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commission` | `string` \| `number` |

#### Defined in

[txwrapper-substrate/src/methods/staking/validate.ts:13](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-substrate/src/methods/staking/validate.ts#L13)
