**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/util/encodeUnsignedTx"

# Module: "src/util/encodeUnsignedTx"

## Index

### Functions

* [encodeUnsignedTransaction](_src_util_encodeunsignedtx_.md#encodeunsignedtransaction)

## Functions

### encodeUnsignedTransaction

▸ **encodeUnsignedTransaction**(`unsigned`: [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md), `options`: [Options](../interfaces/_src_util_types_.options.md)): string

*Defined in [src/util/encodeUnsignedTx.ts:9](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/encodeUnsignedTx.ts#L9)*

Encode an unsigned transaction to submit.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md) | An Unsigned Transaction that will be encoded. |
`options` | [Options](../interfaces/_src_util_types_.options.md) | Registry used for constructing the payload.  |

**Returns:** string
