[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [staking](../modules/txwrapper_substrate_src.methods.staking.md) / StakingNominateArgs

# Interface: StakingNominateArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[staking](../modules/txwrapper_substrate_src.methods.staking.md).StakingNominateArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`StakingNominateArgs`**

## Table of contents

### Properties

- [targets](txwrapper_substrate_src.methods.staking.StakingNominateArgs.md#targets)

## Properties

### targets

• **targets**: `string`[]

The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
nominations are allowed.

Warning: This provides no checks as to whether these targets are actual validators.

#### Defined in

[txwrapper-substrate/src/methods/staking/nominate.ts:16](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-substrate/src/methods/staking/nominate.ts#L16)
