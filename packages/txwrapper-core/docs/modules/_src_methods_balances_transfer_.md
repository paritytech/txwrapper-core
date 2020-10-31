**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/balances/transfer"

# Module: "src/methods/balances/transfer"

## Index

### Interfaces

* [BalancesTransferArgs](../interfaces/_src_methods_balances_transfer_.balancestransferargs.md)

### Functions

* [transfer](_src_methods_balances_transfer_.md#transfer)

## Functions

### transfer

▸ **transfer**(`args`: [BalancesTransferArgs](../interfaces/_src_methods_balances_transfer_.balancestransferargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/balances/transfer.ts:27](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/balances/transfer.ts#L27)*

Construct a balance transfer transaction offline.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferArgs](../interfaces/_src_methods_balances_transfer_.balancestransferargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
