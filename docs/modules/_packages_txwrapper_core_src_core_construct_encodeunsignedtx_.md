**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-core/src/core/construct/encodeUnsignedTx"

# Module: "packages/txwrapper-core/src/core/construct/encodeUnsignedTx"

## Index

### Functions

* [encodeUnsignedTransaction](_packages_txwrapper_core_src_core_construct_encodeunsignedtx_.md#encodeunsignedtransaction)

## Functions

### encodeUnsignedTransaction

▸ **encodeUnsignedTransaction**(`unsigned`: [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md), `options`: [Options](../interfaces/_packages_txwrapper_core_src_types_method_.options.md)): string

*Defined in [packages/txwrapper-core/src/core/construct/encodeUnsignedTx.ts:9](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-core/src/core/construct/encodeUnsignedTx.ts#L9)*

Encode an unsigned transaction to submit.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md) | An Unsigned Transaction that will be encoded. |
`options` | [Options](../interfaces/_packages_txwrapper_core_src_types_method_.options.md) | Registry used for constructing the payload.  |

**Returns:** string
