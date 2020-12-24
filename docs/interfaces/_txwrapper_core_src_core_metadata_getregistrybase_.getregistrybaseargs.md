**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-core/src/core/metadata/getRegistryBase"](../modules/_txwrapper_core_src_core_metadata_getregistrybase_.md) / GetRegistryBaseArgs

# Interface: GetRegistryBaseArgs

## Hierarchy

* **GetRegistryBaseArgs**

## Index

### Properties

* [chainProperties](_txwrapper_core_src_core_metadata_getregistrybase_.getregistrybaseargs.md#chainproperties)
* [metadataRpc](_txwrapper_core_src_core_metadata_getregistrybase_.getregistrybaseargs.md#metadatarpc)
* [specTypes](_txwrapper_core_src_core_metadata_getregistrybase_.getregistrybaseargs.md#spectypes)

## Properties

### chainProperties

•  **chainProperties**: [ChainProperties](_txwrapper_core_src_types_codec_.chainproperties.md) \| AnyJson

*Defined in [packages/txwrapper-core/src/core/metadata/getRegistryBase.ts:11](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L11)*

Chain properties, normally returned by the `system_properties` call.

___

### metadataRpc

•  **metadataRpc**: string

*Defined in [packages/txwrapper-core/src/core/metadata/getRegistryBase.ts:19](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L19)*

Used to set the correct metadata for the registry

___

### specTypes

•  **specTypes**: RegistryTypes

*Defined in [packages/txwrapper-core/src/core/metadata/getRegistryBase.ts:15](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L15)*

Chain specific type definitions to registry.
