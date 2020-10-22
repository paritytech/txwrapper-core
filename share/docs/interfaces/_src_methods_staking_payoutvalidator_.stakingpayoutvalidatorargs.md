**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/methods/staking/payoutValidator"](../modules/_src_methods_staking_payoutvalidator_.md) / StakingPayoutValidatorArgs

# Interface: StakingPayoutValidatorArgs

## Hierarchy

* {}

  ↳ **StakingPayoutValidatorArgs**

## Index

### Properties

* [era](_src_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md#era)

## Properties

### era

•  **era**: number

*Defined in [src/methods/staking/payoutValidator.ts:15](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/payoutValidator.ts#L15)*

May not be lower than one following the most recently paid era. If it is
higher, then it indicates an instruction to skip the payout of all
previous eras.
