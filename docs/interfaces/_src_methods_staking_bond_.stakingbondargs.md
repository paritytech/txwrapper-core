**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/methods/staking/bond"](../modules/_src_methods_staking_bond_.md) / StakingBondArgs

# Interface: StakingBondArgs

## Hierarchy

* {}

  ↳ **StakingBondArgs**

## Index

### Properties

* [controller](_src_methods_staking_bond_.stakingbondargs.md#controller)
* [payee](_src_methods_staking_bond_.stakingbondargs.md#payee)
* [value](_src_methods_staking_bond_.stakingbondargs.md#value)

## Properties

### controller

•  **controller**: string

*Defined in [src/methods/staking/bond.ts:13](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/bond.ts#L13)*

The SS-58 encoded address of the Controller account.

___

### payee

•  **payee**: string \| { Account: string  }

*Defined in [src/methods/staking/bond.ts:21](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/bond.ts#L21)*

The rewards destination. Can be "Stash", "Staked", "Controller" or "{ Account: accountId }"".

___

### value

•  **value**: number \| string

*Defined in [src/methods/staking/bond.ts:17](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/bond.ts#L17)*

The number of tokens to bond.
