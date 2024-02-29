[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [staking](../modules/txwrapper_substrate_src.methods.staking.md) / StakingSetPayeeArgs

# Interface: StakingSetPayeeArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[staking](../modules/txwrapper_substrate_src.methods.staking.md).StakingSetPayeeArgs

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`StakingSetPayeeArgs`**

  ↳↳ [`StakingBondArgs`](txwrapper_substrate_src.methods.staking.StakingBondArgs.md)

## Table of contents

### Properties

- [payee](txwrapper_substrate_src.methods.staking.StakingSetPayeeArgs.md#payee)

## Properties

### payee

• **payee**: `string` \| \{ `Account`: `string`  }

The rewards destination. Can be "Stash", "Staked", "Controller" or "{ Account: accountId }".

#### Defined in

[txwrapper-substrate/src/methods/staking/setPayee.ts:13](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/staking/setPayee.ts#L13)
