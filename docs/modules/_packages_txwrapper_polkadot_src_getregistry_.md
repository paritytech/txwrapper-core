**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-polkadot/src/getRegistry"

# Module: "packages/txwrapper-polkadot/src/getRegistry"

## Index

### References

* [getRegistryPolkadot](_packages_txwrapper_polkadot_src_getregistry_.md#getregistrypolkadot)

### Functions

* [getRegistryKusama](_packages_txwrapper_polkadot_src_getregistry_.md#getregistrykusama)
* [getRegistryWestend](_packages_txwrapper_polkadot_src_getregistry_.md#getregistrywestend)

## References

### getRegistryPolkadot

Re-exports: [getRegistryPolkadot](_packages_txwrapper_core_src_polkadot_.md#getregistrypolkadot)

## Functions

### getRegistryKusama

▸ **getRegistryKusama**(`specVersion`: number, `metadataRpc`: string): TypeRegistry

*Defined in [packages/txwrapper-polkadot/src/getRegistry.ts:19](https://github.com/paritytech/txwrapper-core/blob/79cbc99/packages/txwrapper-polkadot/src/getRegistry.ts#L19)*

Get the Kusama type registry for a given spec version.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`specVersion` | number |  |
`metadataRpc` | string |   |

**Returns:** TypeRegistry

___

### getRegistryWestend

▸ **getRegistryWestend**(`specVersion`: number, `metadataRpc`: string): TypeRegistry

*Defined in [packages/txwrapper-polkadot/src/getRegistry.ts:41](https://github.com/paritytech/txwrapper-core/blob/79cbc99/packages/txwrapper-polkadot/src/getRegistry.ts#L41)*

Get the Westend type registry for a given spec version.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`specVersion` | number |  |
`metadataRpc` | string |   |

**Returns:** TypeRegistry
