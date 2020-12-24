**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "txwrapper-substrate/src/methods/balances/transfer"

# Module: "txwrapper-substrate/src/methods/balances/transfer"

## Index

### Interfaces

* [BalancesTransferArgs](../interfaces/_txwrapper_substrate_src_methods_balances_transfer_.balancestransferargs.md)

### Functions

* [transfer](_txwrapper_substrate_src_methods_balances_transfer_.md#transfer)

## Functions

### transfer

▸ **transfer**(`args`: [BalancesTransferArgs](../interfaces/_txwrapper_substrate_src_methods_balances_transfer_.balancestransferargs.md), `info`: [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)

*Defined in [packages/txwrapper-substrate/src/methods/balances/transfer.ts:27](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-substrate/src/methods/balances/transfer.ts#L27)*

Construct a balance transfer transaction offline.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferArgs](../interfaces/_txwrapper_substrate_src_methods_balances_transfer_.balancestransferargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)
