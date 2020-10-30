**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/system/remark"

# Module: "src/methods/system/remark"

## Index

### Interfaces

* [SystemRemarkArgs](../interfaces/_src_methods_system_remark_.systemremarkargs.md)

### Functions

* [remark](_src_methods_system_remark_.md#remark)

## Functions

### remark

▸ **remark**(`args`: [SystemRemarkArgs](../interfaces/_src_methods_system_remark_.systemremarkargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/system/remark.ts:23](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/system/remark.ts#L23)*

Make some on-chain remark.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [SystemRemarkArgs](../interfaces/_src_methods_system_remark_.systemremarkargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
