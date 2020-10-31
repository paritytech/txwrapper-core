**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/balances/transferKeepAlive"

# Module: "src/methods/balances/transferKeepAlive"

## Index

### Type aliases

* [BalancesTransferKeepAliveArgs](_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs)

### Functions

* [transferKeepAlive](_src_methods_balances_transferkeepalive_.md#transferkeepalive)

## Type aliases

### BalancesTransferKeepAliveArgs

Ƭ  **BalancesTransferKeepAliveArgs**: [BalancesTransferArgs](../interfaces/_src_methods_balances_transfer_.balancestransferargs.md)

*Defined in [src/methods/balances/transferKeepAlive.ts:9](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/balances/transferKeepAlive.ts#L9)*

## Functions

### transferKeepAlive

▸ **transferKeepAlive**(`args`: [BalancesTransferKeepAliveArgs](_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/balances/transferKeepAlive.ts:18](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/balances/transferKeepAlive.ts#L18)*

Construct a balance transfer transaction offline.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferKeepAliveArgs](_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
