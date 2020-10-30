**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/staking/withdrawUnbonded"

# Module: "src/methods/staking/withdrawUnbonded"

## Index

### Interfaces

* [StakingWithdrawUnbondedArgs](../interfaces/_src_methods_staking_withdrawunbonded_.stakingwithdrawunbondedargs.md)

### Functions

* [withdrawUnbonded](_src_methods_staking_withdrawunbonded_.md#withdrawunbonded)

## Functions

### withdrawUnbonded

▸ **withdrawUnbonded**(`args`: [StakingWithdrawUnbondedArgs](../interfaces/_src_methods_staking_withdrawunbonded_.stakingwithdrawunbondedargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/staking/withdrawUnbonded.ts:22](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/withdrawUnbonded.ts#L22)*

Remove any unlocked chunks from the `unlocking` queue from our management.

Can only be called when `EraElectionStatus` is `Closed`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingWithdrawUnbondedArgs](../interfaces/_src_methods_staking_withdrawunbonded_.stakingwithdrawunbondedargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
