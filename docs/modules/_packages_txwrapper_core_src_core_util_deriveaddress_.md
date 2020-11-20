**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-core/src/core/util/deriveAddress"

# Module: "packages/txwrapper-core/src/core/util/deriveAddress"

## Index

### Functions

* [deriveAddress](_packages_txwrapper_core_src_core_util_deriveaddress_.md#deriveaddress)

## Functions

### deriveAddress

▸ **deriveAddress**(`publicKey`: string \| Uint8Array, `ss58Format`: number): string

*Defined in [packages/txwrapper-core/src/core/util/deriveAddress.ts:9](https://github.com/paritytech/txwrapper-core/blob/a5bee61/packages/txwrapper-core/src/core/util/deriveAddress.ts#L9)*

Derive an address from a cryptographic public key offline.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`publicKey` | string \| Uint8Array | The public key to derive from. |
`ss58Format` | number | The SS58 format to use.  |

**Returns:** string
