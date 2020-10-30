**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/vesting/vest"

# Module: "src/methods/vesting/vest"

## Index

### Functions

* [vest](_src_methods_vesting_vest_.md#vest)

## Functions

### vest

▸ **vest**(`args`: {}, `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/vesting/vest.ts:15](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/vesting/vest.ts#L15)*

Unlock any vested funds of the sender account.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | {} | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
