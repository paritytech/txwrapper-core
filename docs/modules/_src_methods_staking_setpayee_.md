**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/staking/setPayee"

# Module: "src/methods/staking/setPayee"

## Index

### Interfaces

* [StakingSetPayeeArgs](../interfaces/_src_methods_staking_setpayee_.stakingsetpayeeargs.md)

### Functions

* [setPayee](_src_methods_staking_setpayee_.md#setpayee)

## Functions

### setPayee

▸ **setPayee**(`args`: [StakingSetPayeeArgs](../interfaces/_src_methods_staking_setpayee_.stakingsetpayeeargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/staking/setPayee.ts:27](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/setPayee.ts#L27)*

(Re-)set the payment target for staking rewards.

Effects will be felt at the beginning of the next era.

 The dispatch origin for this call must be _Signed_ by the controller, not the stash.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingSetPayeeArgs](../interfaces/_src_methods_staking_setpayee_.stakingsetpayeeargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
