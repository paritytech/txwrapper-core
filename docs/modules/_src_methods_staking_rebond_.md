**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/staking/rebond"

# Module: "src/methods/staking/rebond"

## Index

### Interfaces

* [StakingRebondArgs](../interfaces/_src_methods_staking_rebond_.stakingrebondargs.md)

### Functions

* [rebond](_src_methods_staking_rebond_.md#rebond)

## Functions

### rebond

▸ **rebond**(`args`: [StakingRebondArgs](../interfaces/_src_methods_staking_rebond_.stakingrebondargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/staking/rebond.ts:23](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/rebond.ts#L23)*

Rebond a portion of the stash scheduled to be unlocked.

The dispatch origin must be signed by the controller, and it can be only called when
`EraElectionStatus` is `Closed`.

#### Parameters:

Name | Type |
------ | ------ |
`args` | [StakingRebondArgs](../interfaces/_src_methods_staking_rebond_.stakingrebondargs.md) |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
