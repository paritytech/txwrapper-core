**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/staking/payoutStakers"

# Module: "src/methods/staking/payoutStakers"

## Index

### Interfaces

* [StakingPayoutStakersArgs](../interfaces/_src_methods_staking_payoutstakers_.stakingpayoutstakersargs.md)

### Functions

* [payoutStakers](_src_methods_staking_payoutstakers_.md#payoutstakers)

## Functions

### payoutStakers

▸ **payoutStakers**(`args`: [StakingPayoutStakersArgs](../interfaces/_src_methods_staking_payoutstakers_.stakingpayoutstakersargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/staking/payoutStakers.ts:34](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/payoutStakers.ts#L34)*

Pay out all the stakers behind a single validator for a single era.

Any account can call this function, even if it is not one of the stakers.

Can only be called when `EraElectionStatus` is `Closed`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingPayoutStakersArgs](../interfaces/_src_methods_staking_payoutstakers_.stakingpayoutstakersargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
