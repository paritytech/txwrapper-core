**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/createSignedTx"

# Module: "src/createSignedTx"

## Index

### Functions

* [createSignedTx](_src_createsignedtx_.md#createsignedtx)

## Functions

### createSignedTx

▸ **createSignedTx**(`unsigned`: [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md), `signature`: string, `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): string

*Defined in [src/createSignedTx.ts:13](https://github.com/paritytech/txwrapper/blob/ddb0953/src/createSignedTx.ts#L13)*

Serialize a signed transaction in a format that can be submitted over the
Node RPC Interface from the signing payload and signature produced by the
remote signer.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md) | The JSON representing the unsigned transaction. |
`signature` | string | Signature of the signing payload produced by the remote signer. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** string
