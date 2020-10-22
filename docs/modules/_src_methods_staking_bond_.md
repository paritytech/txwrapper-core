**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/staking/bond"

# Module: "src/methods/staking/bond"

## Index

### Interfaces

* [StakingBondArgs](../interfaces/_src_methods_staking_bond_.stakingbondargs.md)

### Functions

* [bond](_src_methods_staking_bond_.md#bond)

## Functions

### bond

▸ **bond**(`args`: [StakingBondArgs](../interfaces/_src_methods_staking_bond_.stakingbondargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/staking/bond.ts:31](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/staking/bond.ts#L31)*

Construct a transaction to bond funds and create a Stash account.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingBondArgs](../interfaces/_src_methods_staking_bond_.stakingbondargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
