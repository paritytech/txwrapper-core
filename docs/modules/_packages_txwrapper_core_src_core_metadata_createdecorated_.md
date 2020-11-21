**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-core/src/core/metadata/createDecorated"

# Module: "packages/txwrapper-core/src/core/metadata/createDecorated"

## Index

### Functions

* [createDecoratedConstants](_packages_txwrapper_core_src_core_metadata_createdecorated_.md#createdecoratedconstants)

## Functions

### createDecoratedConstants

▸ **createDecoratedConstants**(`registry`: TypeRegistry, `metadataRpc`: string): Constants

*Defined in [packages/txwrapper-core/src/core/metadata/createDecorated.ts:33](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/core/metadata/createDecorated.ts#L33)*

From a metadata hex string (for example returned by RPC), create decorated
modules with their constants.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`registry` | TypeRegistry | The registry of the metadata. |
`metadataRpc` | string | - |

**Returns:** Constants
