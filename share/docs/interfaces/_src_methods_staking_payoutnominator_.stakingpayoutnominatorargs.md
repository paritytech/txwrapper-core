**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/methods/staking/payoutNominator"](../modules/_src_methods_staking_payoutnominator_.md) / StakingPayoutNominatorArgs

# Interface: StakingPayoutNominatorArgs

## Hierarchy

* {}

  ↳ **StakingPayoutNominatorArgs**

## Index

### Properties

* [era](_src_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md#era)
* [validators](_src_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md#validators)

## Properties

### era

•  **era**: number

*Defined in [src/methods/staking/payoutNominator.ts:15](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/payoutNominator.ts#L15)*

May not be lower than one following the most recently paid era. If it is
higher, then it indicates an instruction to skip the payout of all
previous eras.

___

### validators

•  **validators**: [string, number][]

*Defined in [src/methods/staking/payoutNominator.ts:22](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/payoutNominator.ts#L22)*

List of all validators that `who` had exposure to during `era` alongside
the index of the `who` in the clipped exposure of the validator. i.e. each
element is a tuple of `(validator, index of `who` in clipped exposure of
validator)`.
