**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/decode/decode"

# Module: "src/decode/decode"

## Index

### Functions

* [decode](_src_decode_decode_.md#decode)

## Functions

### decode

▸ **decode**(`unsignedTx`: [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md), `toInt?`: undefined \| false \| true): DecodedUnsignedTx

*Defined in [src/decode/decode.ts:18](https://github.com/paritytech/txwrapper/blob/ddb0953/src/decode/decode.ts#L18)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`unsignedTx` | [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md) | The data to parse, as an unsigned tx. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Runtime-specific data used for decoding the transaction. |
`toInt?` | undefined \| false \| true | Whether or not to forcibly serialize integers in the call args to base-10 strings. If false, integers will either be a number or hex. Defaults to false  |

**Returns:** DecodedUnsignedTx

▸ **decode**(`signedTx`: string, `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md), `toInt?`: undefined \| false \| true): DecodedSignedTx

*Defined in [src/decode/decode.ts:33](https://github.com/paritytech/txwrapper/blob/ddb0953/src/decode/decode.ts#L33)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | The data to parse, as a signed tx hex string. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Runtime-specific data used for decoding the transaction. |
`toInt?` | undefined \| false \| true | Whether or not to forcibly serialize integers in the call args to base-10 strings. If false, integers will either be a number or hex. Defaults to false  |

**Returns:** DecodedSignedTx

▸ **decode**(`signingPayload`: string, `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md), `toInt?`: undefined \| false \| true): DecodedSigningPayload

*Defined in [src/decode/decode.ts:48](https://github.com/paritytech/txwrapper/blob/ddb0953/src/decode/decode.ts#L48)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The data to parse, as a signing payload hex string. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Runtime-specific data used for decoding the transaction. |
`toInt?` | undefined \| false \| true | Whether or not to forcibly serialize integers in the call args to base-10 strings. If false, integers will either be a number or hex. Defaults to false  |

**Returns:** DecodedSigningPayload
