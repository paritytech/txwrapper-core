**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/staking/payoutValidator"

# Module: "src/methods/staking/payoutValidator"

## Index

### Interfaces

* [StakingPayoutValidatorArgs](../interfaces/_src_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md)

### Functions

* [payoutValidator](_src_methods_staking_payoutvalidator_.md#payoutvalidator)

## Functions

### payoutValidator

▸ **payoutValidator**(`args`: [StakingPayoutValidatorArgs](../interfaces/_src_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/staking/payoutValidator.ts:29](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/payoutValidator.ts#L29)*

Make one validator's payout for one era.
WARNING: once an era is payed for a validator such validator can't claim the
payout of previous era.
WARNING: Incorrect arguments here can result in loss of payout. Be very careful.

**`deprecated`** Update to the latest version of Substrate to use `staking.payoutStakers` instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingPayoutValidatorArgs](../interfaces/_src_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method. |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
