[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [staking](../modules/txwrapper_substrate_src.methods.staking.md) / StakingPayoutStakersArgs

# Interface: StakingPayoutStakersArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[staking](../modules/txwrapper_substrate_src.methods.staking.md).StakingPayoutStakersArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`StakingPayoutStakersArgs`**

## Table of contents

### Properties

- [era](txwrapper_substrate_src.methods.staking.StakingPayoutStakersArgs.md#era)
- [validatorStash](txwrapper_substrate_src.methods.staking.StakingPayoutStakersArgs.md#validatorstash)

## Properties

### era

• **era**: `string` \| `number`

May be any era between `[current_era - history_depth; current_era]`. Substrate only
retains up to `history_depth` eras of reward information.

#### Defined in

[txwrapper-substrate/src/methods/staking/payoutStakers.ts:19](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/staking/payoutStakers.ts#L19)

___

### validatorStash

• **validatorStash**: `string`

The Stash account of a _validator._ Their nominators, up to, the maximum
`MaxNominatorRewardedPerValidator`, will also receive their rewards.

#### Defined in

[txwrapper-substrate/src/methods/staking/payoutStakers.ts:14](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-substrate/src/methods/staking/payoutStakers.ts#L14)
