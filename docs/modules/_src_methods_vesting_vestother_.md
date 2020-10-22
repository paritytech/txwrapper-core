**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/vesting/vestOther"

# Module: "src/methods/vesting/vestOther"

## Index

### Interfaces

* [VestingVestOtherArgs](../interfaces/_src_methods_vesting_vestother_.vestingvestotherargs.md)

### Functions

* [vestOther](_src_methods_vesting_vestother_.md#vestother)

## Functions

### vestOther

▸ **vestOther**(`args`: [VestingVestOtherArgs](../interfaces/_src_methods_vesting_vestother_.vestingvestotherargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/vesting/vestOther.ts:24](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/vesting/vestOther.ts#L24)*

Unlock any vested funds of a `target` account.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [VestingVestOtherArgs](../interfaces/_src_methods_vesting_vestother_.vestingvestotherargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
