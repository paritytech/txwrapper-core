**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-substrate/src/methods/balances/transfer"

# Module: "packages/txwrapper-substrate/src/methods/balances/transfer"

## Index

### Interfaces

* [BalancesTransferArgs](../interfaces/_packages_txwrapper_substrate_src_methods_balances_transfer_.balancestransferargs.md)

### Functions

* [transfer](_packages_txwrapper_substrate_src_methods_balances_transfer_.md#transfer)

## Functions

### transfer

▸ **transfer**(`args`: [BalancesTransferArgs](../interfaces/_packages_txwrapper_substrate_src_methods_balances_transfer_.balancestransferargs.md), `info`: BaseTxInfo, `options`: OptionsWithMeta): UnsignedTransaction

*Defined in [packages/txwrapper-substrate/src/methods/balances/transfer.ts:27](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-substrate/src/methods/balances/transfer.ts#L27)*

Construct a balance transfer transaction offline.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferArgs](../interfaces/_packages_txwrapper_substrate_src_methods_balances_transfer_.balancestransferargs.md) | Arguments specific to this method. |
`info` | BaseTxInfo | Information required to construct the transaction. |
`options` | OptionsWithMeta | Registry and metadata used for constructing the method.  |

**Returns:** UnsignedTransaction
