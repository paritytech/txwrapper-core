**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-core/src/core/decode/decode"

# Module: "packages/txwrapper-core/src/core/decode/decode"

## Index

### Functions

* [decode](_packages_txwrapper_core_src_core_decode_decode_.md#decode)

## Functions

### decode

▸ **decode**(`unsignedTx`: [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md), `options`: [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md)): [DecodedUnsignedTx](_packages_txwrapper_core_src_types_decode_.md#decodedunsignedtx)

*Defined in [packages/txwrapper-core/src/core/decode/decode.ts:19](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-core/src/core/decode/decode.ts#L19)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
All integers are serialized to a base-10 string.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`unsignedTx` | [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md) | The data to parse, as an unsigned tx. |
`options` | [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md) | Runtime-specific data used for decoding the transaction.  |

**Returns:** [DecodedUnsignedTx](_packages_txwrapper_core_src_types_decode_.md#decodedunsignedtx)

▸ **decode**(`signedTx`: string, `options`: [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md)): [DecodedSignedTx](_packages_txwrapper_core_src_types_decode_.md#decodedsignedtx)

*Defined in [packages/txwrapper-core/src/core/decode/decode.ts:31](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-core/src/core/decode/decode.ts#L31)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
All integers are serialized to a base-10 string.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | The data to parse, as a signed tx hex string. |
`options` | [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md) | Runtime-specific data used for decoding the transaction.  |

**Returns:** [DecodedSignedTx](_packages_txwrapper_core_src_types_decode_.md#decodedsignedtx)

▸ **decode**(`signingPayload`: string, `options`: [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md)): [DecodedSigningPayload](_packages_txwrapper_core_src_types_decode_.md#decodedsigningpayload)

*Defined in [packages/txwrapper-core/src/core/decode/decode.ts:43](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-core/src/core/decode/decode.ts#L43)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
All integers are serialized to a base-10 string.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The data to parse, as a signing payload hex string. |
`options` | [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md) | Runtime-specific data used for decoding the transaction.  |

**Returns:** [DecodedSigningPayload](_packages_txwrapper_core_src_types_decode_.md#decodedsigningpayload)
