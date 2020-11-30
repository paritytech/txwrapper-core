**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-core/src/polkadot"

# Module: "packages/txwrapper-core/src/polkadot"

## Index

### Enumerations

* [PolkadotChainName](../enums/_packages_txwrapper_core_src_polkadot_.polkadotchainname.md)
* [PolkadotSS58Format](../enums/_packages_txwrapper_core_src_polkadot_.polkadotss58format.md)
* [PolkadotSpecName](../enums/_packages_txwrapper_core_src_polkadot_.polkadotspecname.md)
* [PolkadotTokenDecimals](../enums/_packages_txwrapper_core_src_polkadot_.polkadottokendecimals.md)
* [PolkadotTokenSymbols](../enums/_packages_txwrapper_core_src_polkadot_.polkadottokensymbols.md)

### Functions

* [getRegistryPolkadot](_packages_txwrapper_core_src_polkadot_.md#getregistrypolkadot)

## Functions

### getRegistryPolkadot

▸ **getRegistryPolkadot**(`specVersion`: number, `metadataRpc`: string): TypeRegistry

*Defined in [packages/txwrapper-core/src/polkadot.ts:89](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-core/src/polkadot.ts#L89)*

Get the Polkadot type registry for a given spec version.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`specVersion` | number |  |
`metadataRpc` | string |   |

**Returns:** TypeRegistry
