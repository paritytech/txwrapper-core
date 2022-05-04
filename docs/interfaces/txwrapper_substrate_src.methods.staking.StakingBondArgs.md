[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [staking](../modules/txwrapper_substrate_src.methods.staking.md) / StakingBondArgs

# Interface: StakingBondArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[staking](../modules/txwrapper_substrate_src.methods.staking.md).StakingBondArgs

## Hierarchy

- [`StakingSetPayeeArgs`](txwrapper_substrate_src.methods.staking.StakingSetPayeeArgs.md)

  ↳ **`StakingBondArgs`**

## Table of contents

### Properties

- [controller](txwrapper_substrate_src.methods.staking.StakingBondArgs.md#controller)
- [payee](txwrapper_substrate_src.methods.staking.StakingBondArgs.md#payee)
- [value](txwrapper_substrate_src.methods.staking.StakingBondArgs.md#value)

## Properties

### controller

• **controller**: `string`

The SS-58 encoded address of the Controller account.

#### Defined in

[txwrapper-substrate/src/methods/staking/bond.ts:14](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-substrate/src/methods/staking/bond.ts#L14)

___

### payee

• **payee**: `string` \| { `Account`: `string`  }

The rewards destination. Can be "Stash", "Staked", "Controller" or "{ Account: accountId }".

#### Inherited from

[StakingSetPayeeArgs](txwrapper_substrate_src.methods.staking.StakingSetPayeeArgs.md).[payee](txwrapper_substrate_src.methods.staking.StakingSetPayeeArgs.md#payee)

#### Defined in

[txwrapper-substrate/src/methods/staking/setPayee.ts:13](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-substrate/src/methods/staking/setPayee.ts#L13)

___

### value

• **value**: `string` \| `number`

The number of tokens to bond.

#### Defined in

[txwrapper-substrate/src/methods/staking/bond.ts:18](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-substrate/src/methods/staking/bond.ts#L18)
