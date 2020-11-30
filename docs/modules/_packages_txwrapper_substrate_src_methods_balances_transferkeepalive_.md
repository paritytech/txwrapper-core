**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-substrate/src/methods/balances/transferKeepAlive"

# Module: "packages/txwrapper-substrate/src/methods/balances/transferKeepAlive"

## Index

### Type aliases

* [BalancesTransferKeepAliveArgs](_packages_txwrapper_substrate_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs)

### Functions

* [transferKeepAlive](_packages_txwrapper_substrate_src_methods_balances_transferkeepalive_.md#transferkeepalive)

## Type aliases

### BalancesTransferKeepAliveArgs

Ƭ  **BalancesTransferKeepAliveArgs**: [BalancesTransferArgs](../interfaces/_packages_txwrapper_substrate_src_methods_balances_transfer_.balancestransferargs.md)

*Defined in [packages/txwrapper-substrate/src/methods/balances/transferKeepAlive.ts:10](https://github.com/paritytech/txwrapper-core/blob/1c09a0e/packages/txwrapper-substrate/src/methods/balances/transferKeepAlive.ts#L10)*

## Functions

### transferKeepAlive

▸ **transferKeepAlive**(`args`: [BalancesTransferKeepAliveArgs](_packages_txwrapper_substrate_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs), `info`: BaseTxInfo, `options`: OptionsWithMeta): UnsignedTransaction

*Defined in [packages/txwrapper-substrate/src/methods/balances/transferKeepAlive.ts:19](https://github.com/paritytech/txwrapper-core/blob/1c09a0e/packages/txwrapper-substrate/src/methods/balances/transferKeepAlive.ts#L19)*

Construct a balance transfer transaction offline.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferKeepAliveArgs](_packages_txwrapper_substrate_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs) | Arguments specific to this method. |
`info` | BaseTxInfo | Information required to construct the transaction. |
`options` | OptionsWithMeta | Registry and metadata used for constructing the method.  |

**Returns:** UnsignedTransaction
