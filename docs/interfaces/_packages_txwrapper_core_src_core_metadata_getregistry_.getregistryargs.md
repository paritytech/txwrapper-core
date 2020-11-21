**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / ["packages/txwrapper-core/src/core/metadata/getRegistry"](../modules/_packages_txwrapper_core_src_core_metadata_getregistry_.md) / GetRegistryArgs

# Interface: GetRegistryArgs

## Hierarchy

* **GetRegistryArgs**

## Index

### Properties

* [chainProperties](_packages_txwrapper_core_src_core_metadata_getregistry_.getregistryargs.md#chainproperties)
* [metadataRpc](_packages_txwrapper_core_src_core_metadata_getregistry_.getregistryargs.md#metadatarpc)
* [specTypes](_packages_txwrapper_core_src_core_metadata_getregistry_.getregistryargs.md#spectypes)

## Properties

### chainProperties

•  **chainProperties**: [ChainProperties](_packages_txwrapper_core_src_types_codec_.chainproperties.md) \| AnyJson

*Defined in [packages/txwrapper-core/src/core/metadata/getRegistry.ts:11](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/core/metadata/getRegistry.ts#L11)*

Chain properties, normally returned by the `system_properties` call.

___

### metadataRpc

•  **metadataRpc**: string

*Defined in [packages/txwrapper-core/src/core/metadata/getRegistry.ts:19](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/core/metadata/getRegistry.ts#L19)*

Used to set the correct metadata for the registry

___

### specTypes

•  **specTypes**: RegistryTypes

*Defined in [packages/txwrapper-core/src/core/metadata/getRegistry.ts:15](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/core/metadata/getRegistry.ts#L15)*

Chain specific type definitions to registry.
