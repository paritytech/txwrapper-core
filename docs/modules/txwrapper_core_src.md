[txwrapper-core](../README.md) / [Modules](../modules.md) / txwrapper-core/src

# Module: txwrapper-core/src

## Table of contents

### Namespaces

- [&lt;internal\&gt;](txwrapper_core_src._internal_.md)

### Enumerations

- [PolkadotSS58Format](../enums/txwrapper_core_src.PolkadotSS58Format.md)

### Interfaces

- [BaseTxInfo](../interfaces/txwrapper_core_src.BaseTxInfo.md)
- [ChainProperties](../interfaces/txwrapper_core_src.ChainProperties.md)
- [DecodedUnsignedHexTx](../interfaces/txwrapper_core_src.DecodedUnsignedHexTx.md)
- [GetRegistryOptsCore](../interfaces/txwrapper_core_src.GetRegistryOptsCore.md)
- [IMethod](../interfaces/txwrapper_core_src.IMethod.md)
- [Options](../interfaces/txwrapper_core_src.Options.md)
- [OptionsWithMeta](../interfaces/txwrapper_core_src.OptionsWithMeta.md)
- [TxInfo](../interfaces/txwrapper_core_src.TxInfo.md)
- [TxMethod](../interfaces/txwrapper_core_src.TxMethod.md)
- [UnsignedTransaction](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

### Type aliases

- [Args](txwrapper_core_src.md#args)
- [DecodedSignedTx](txwrapper_core_src.md#decodedsignedtx)
- [DecodedSigningPayload](txwrapper_core_src.md#decodedsigningpayload)
- [DecodedUnsignedTx](txwrapper_core_src.md#decodedunsignedtx)
- [EmptyArgs](txwrapper_core_src.md#emptyargs)
- [KeyringPair](txwrapper_core_src.md#keyringpair)

### Variables

- [construct](txwrapper_core_src.md#construct)
- [isBrowser](txwrapper_core_src.md#isbrowser)

### Functions

- [decode](txwrapper_core_src.md#decode)
- [defineMethod](txwrapper_core_src.md#definemethod)
- [deriveAddress](txwrapper_core_src.md#deriveaddress)
- [getRegistryBase](txwrapper_core_src.md#getregistrybase)
- [importPrivateKey](txwrapper_core_src.md#importprivatekey)
- [toTxMethod](txwrapper_core_src.md#totxmethod)

## Type aliases

### Args

Ƭ **Args**: `Record`<`string`, `AnyJson`\>

Base Argument object for methods.

#### Defined in

[txwrapper-core/src/types/method.ts:42](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/method.ts#L42)

___

### DecodedSignedTx

Ƭ **DecodedSignedTx**: `Omit`<[`TxInfo`](../interfaces/txwrapper_core_src.TxInfo.md), ``"blockHash"`` \| ``"blockNumber"`` \| ``"genesisHash"`` \| ``"specVersion"`` \| ``"transactionVersion"`` \| ``"version"``\>

#### Defined in

[txwrapper-core/src/types/decode.ts:7](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/decode.ts#L7)

___

### DecodedSigningPayload

Ƭ **DecodedSigningPayload**: `Omit`<[`TxInfo`](../interfaces/txwrapper_core_src.TxInfo.md), ``"address"`` \| ``"blockNumber"``\>

#### Defined in

[txwrapper-core/src/types/decode.ts:5](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/decode.ts#L5)

___

### DecodedUnsignedTx

Ƭ **DecodedUnsignedTx**: [`TxInfo`](../interfaces/txwrapper_core_src.TxInfo.md)

#### Defined in

[txwrapper-core/src/types/decode.ts:3](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/decode.ts#L3)

___

### EmptyArgs

Ƭ **EmptyArgs**: `Record`<`string`, `never`\>

Empty args.

#### Defined in

[txwrapper-core/src/types/method.ts:47](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/method.ts#L47)

___

### KeyringPair

Ƭ **KeyringPair**: `KeyringPairBase`

A keyring pair

#### Defined in

[txwrapper-core/src/core/util/importPrivateKey.ts:8](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/util/importPrivateKey.ts#L8)

## Variables

### construct

• **construct**: `Object`

Functions for each step of the transaction construction process.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encodeUnsignedTransaction` | (`unsigned`: [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md), `options`: [`Options`](../interfaces/txwrapper_core_src.Options.md)) => `string` |
| `signedTx` | (`unsigned`: [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md), `signature`: \`0x${string}\`, `options`: [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md)) => `string` |
| `signingPayload` | (`unsigned`: [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md), `options`: [`Options`](../interfaces/txwrapper_core_src.Options.md)) => `string` |
| `signingPayloadToU8a` | (`unsigned`: [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md), `options`: [`Options`](../interfaces/txwrapper_core_src.Options.md)) => `Uint8Array` |
| `txHash` | (`signedTx`: `string`) => `string` |

#### Defined in

[txwrapper-core/src/core/index.ts:18](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/index.ts#L18)

___

### isBrowser

• **isBrowser**: `boolean`

#### Defined in

[txwrapper-core/src/core/util/isBrowser.ts:1](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/util/isBrowser.ts#L1)

## Functions

### decode

▸ **decode**(`unsignedTx`, `options`): [`DecodedUnsignedTx`](txwrapper_core_src.md#decodedunsignedtx)

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
All integers are serialized to a base-10 string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unsignedTx` | [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md) | The data to parse, as an unsigned tx. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Runtime-specific data used for decoding the transaction. |

#### Returns

[`DecodedUnsignedTx`](txwrapper_core_src.md#decodedunsignedtx)

#### Defined in

[txwrapper-core/src/core/decode/decode.ts:19](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/decode/decode.ts#L19)

▸ **decode**(`signedTx`, `options`): [`DecodedSignedTx`](txwrapper_core_src.md#decodedsignedtx)

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
All integers are serialized to a base-10 string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signedTx` | `string` | The data to parse, as a signed tx hex string. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Runtime-specific data used for decoding the transaction. |

#### Returns

[`DecodedSignedTx`](txwrapper_core_src.md#decodedsignedtx)

#### Defined in

[txwrapper-core/src/core/decode/decode.ts:31](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/decode/decode.ts#L31)

▸ **decode**(`signingPayload`, `options`): [`DecodedSigningPayload`](txwrapper_core_src.md#decodedsigningpayload)

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
All integers are serialized to a base-10 string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signingPayload` | `string` | The data to parse, as a signing payload hex string. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Runtime-specific data used for decoding the transaction. |

#### Returns

[`DecodedSigningPayload`](txwrapper_core_src.md#decodedsigningpayload)

#### Defined in

[txwrapper-core/src/core/decode/decode.ts:43](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/decode/decode.ts#L43)

___

### defineMethod

▸ **defineMethod**(`info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Helper function to construct an offline method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | [`TxInfo`](../interfaces/txwrapper_core_src.TxInfo.md) | All info necessary to construct a method. That includes base tx info, as well as method name & arguments. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | - |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-core/src/core/method/defineMethod.ts:100](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/method/defineMethod.ts#L100)

___

### deriveAddress

▸ **deriveAddress**(`publicKey`, `ss58Format`, `scheme?`): `string`

Derive an address from a cryptographic public key offline.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `publicKey` | `string` \| `Uint8Array` | `undefined` | The public key to derive from. |
| `ss58Format` | `number` | `undefined` | The SS58 format to use. |
| `scheme` | ``"ed25519"`` \| ``"sr25519"`` \| ``"ecdsa"`` | `'sr25519'` | The scheme in which you want to apply. It defaults to sr25519 |

#### Returns

`string`

#### Defined in

[txwrapper-core/src/core/util/deriveAddress.ts:24](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/util/deriveAddress.ts#L24)

___

### getRegistryBase

▸ **getRegistryBase**(`__namedParameters`): `TypeRegistry`

Create a type registry given chainProperties, specTypes, and metadataRpc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`GetRegistryBaseArgs`](../interfaces/txwrapper_core_src._internal_.GetRegistryBaseArgs.md) |

#### Returns

`TypeRegistry`

#### Defined in

[txwrapper-core/src/core/metadata/getRegistryBase.ts:50](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L50)

___

### importPrivateKey

▸ **importPrivateKey**(`privateKey`, `ss58Format`): [`KeyringPair`](txwrapper_core_src.md#keyringpair)

Import a private key and create a KeyringPair.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `privateKey` | `string` \| `Uint8Array` | The private key of the key pair. |
| `ss58Format` | `number` | The SS58 encoding of the address. |

#### Returns

[`KeyringPair`](txwrapper_core_src.md#keyringpair)

#### Defined in

[txwrapper-core/src/core/util/importPrivateKey.ts:16](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/util/importPrivateKey.ts#L16)

___

### toTxMethod

▸ **toTxMethod**(`registry`, `method`): [`TxMethod`](../interfaces/txwrapper_core_src.TxMethod.md)

From a PolkadotJs `Call` type, get a serializable object representing the
call. All integers are serialized to base 10 strings in order to be safe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `registry` | `TypeRegistry` | The type registry |
| `method` | `Call` | The method to serialize |

#### Returns

[`TxMethod`](../interfaces/txwrapper_core_src.TxMethod.md)

#### Defined in

[txwrapper-core/src/core/method/toTxMethod.ts:21](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/core/method/toTxMethod.ts#L21)
