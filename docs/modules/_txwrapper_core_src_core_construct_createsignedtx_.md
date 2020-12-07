**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "txwrapper-core/src/core/construct/createSignedTx"

# Module: "txwrapper-core/src/core/construct/createSignedTx"

## Index

### Functions

* [createSignedTx](_txwrapper_core_src_core_construct_createsignedtx_.md#createsignedtx)

## Functions

### createSignedTx

▸ **createSignedTx**(`unsigned`: [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md), `signature`: string, `options`: [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md)): string

*Defined in [packages/txwrapper-core/src/core/construct/createSignedTx.ts:14](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-core/src/core/construct/createSignedTx.ts#L14)*

Serialize a signed transaction in a format that can be submitted over the
Node RPC Interface from the signing payload and signature produced by the
remote signer.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md) | The JSON representing the unsigned transaction. |
`signature` | string | Signature of the signing payload produced by the remote signer. |
`options` | [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** string
