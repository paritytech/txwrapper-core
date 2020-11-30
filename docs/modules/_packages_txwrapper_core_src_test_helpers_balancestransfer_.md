**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-core/src/test-helpers/balancesTransfer"

# Module: "packages/txwrapper-core/src/test-helpers/balancesTransfer"

## Index

### Interfaces

* [TestBalancesTransferArgs](../interfaces/_packages_txwrapper_core_src_test_helpers_balancestransfer_.testbalancestransferargs.md)

### Functions

* [balancesTransfer](_packages_txwrapper_core_src_test_helpers_balancestransfer_.md#balancestransfer)

## Functions

### balancesTransfer

▸ **balancesTransfer**(`args`: [TestBalancesTransferArgs](../interfaces/_packages_txwrapper_core_src_test_helpers_balancestransfer_.testbalancestransferargs.md), `info`: [BaseTxInfo](../interfaces/_packages_txwrapper_core_src_types_method_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md)

*Defined in [packages/txwrapper-core/src/test-helpers/balancesTransfer.ts:23](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-core/src/test-helpers/balancesTransfer.ts#L23)*

Construct a balance transfer transaction offline.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [TestBalancesTransferArgs](../interfaces/_packages_txwrapper_core_src_test_helpers_balancestransfer_.testbalancestransferargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_packages_txwrapper_core_src_types_method_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md)
