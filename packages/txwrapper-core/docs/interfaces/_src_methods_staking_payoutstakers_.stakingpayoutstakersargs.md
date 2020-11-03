**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/methods/staking/payoutStakers"](../modules/_src_methods_staking_payoutstakers_.md) / StakingPayoutStakersArgs

# Interface: StakingPayoutStakersArgs

## Hierarchy

* {}

  ↳ **StakingPayoutStakersArgs**

## Index

### Properties

* [era](_src_methods_staking_payoutstakers_.stakingpayoutstakersargs.md#era)
* [validatorStash](_src_methods_staking_payoutstakers_.stakingpayoutstakersargs.md#validatorstash)

## Properties

### era

•  **era**: number \| string

*Defined in [src/methods/staking/payoutStakers.ts:19](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/payoutStakers.ts#L19)*

May be any era between `[current_era - history_depth; current_era]`. Substrate only
retains up to `history_depth` eras of reward information.

___

### validatorStash

•  **validatorStash**: string

*Defined in [src/methods/staking/payoutStakers.ts:14](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/payoutStakers.ts#L14)*

The Stash account of a _validator._ Their nominators, up to, the maximum
`MaxNominatorRewardedPerValidator`, will also receive their rewards.
