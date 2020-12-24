**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "txwrapper-core/src/core/util/importPrivateKey"

# Module: "txwrapper-core/src/core/util/importPrivateKey"

## Index

### Type aliases

* [KeyringPair](_txwrapper_core_src_core_util_importprivatekey_.md#keyringpair)

### Functions

* [importPrivateKey](_txwrapper_core_src_core_util_importprivatekey_.md#importprivatekey)

## Type aliases

### KeyringPair

Ƭ  **KeyringPair**: KeyringPairBase

*Defined in [packages/txwrapper-core/src/core/util/importPrivateKey.ts:8](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/core/util/importPrivateKey.ts#L8)*

A keyring pair

## Functions

### importPrivateKey

▸ **importPrivateKey**(`privateKey`: string \| Uint8Array, `ss58Format`: number): KeyringPair

*Defined in [packages/txwrapper-core/src/core/util/importPrivateKey.ts:16](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/core/util/importPrivateKey.ts#L16)*

Import a private key and create a KeyringPair.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string \| Uint8Array | The private key of the key pair. |
`ss58Format` | number | The SS58 encoding of the address.  |

**Returns:** KeyringPair
