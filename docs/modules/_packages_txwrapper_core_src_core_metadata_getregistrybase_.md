**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-core/src/core/metadata/getRegistryBase"

# Module: "packages/txwrapper-core/src/core/metadata/getRegistryBase"

## Index

### Interfaces

* [GetRegistryBaseArgs](../interfaces/_packages_txwrapper_core_src_core_metadata_getregistrybase_.getregistrybaseargs.md)

### Functions

* [getRegistryBase](_packages_txwrapper_core_src_core_metadata_getregistrybase_.md#getregistrybase)

## Functions

### getRegistryBase

▸ **getRegistryBase**(`__namedParameters`: { chainProperties: undefined \| null \| string \| number \| false \| true \| AnyJson[] \| { [index:string]: AnyJson;  } \| [ChainProperties](../interfaces/_packages_txwrapper_core_src_types_codec_.chainproperties.md) ; metadataRpc: string ; specTypes: Record\<string, string \| Constructor\<Codec> \| Record\<string, string> \| { _enum: string[] \| Record\<string, string \| null>  } \| { _set: Record\<string, number>  }>  }): TypeRegistry

*Defined in [packages/txwrapper-core/src/core/metadata/getRegistryBase.ts:25](https://github.com/paritytech/txwrapper-core/blob/a0a9a76/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L25)*

Create a type registry given chainProperties, specTypes, and metadataRpc.

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { chainProperties: undefined \| null \| string \| number \| false \| true \| AnyJson[] \| { [index:string]: AnyJson;  } \| [ChainProperties](../interfaces/_packages_txwrapper_core_src_types_codec_.chainproperties.md) ; metadataRpc: string ; specTypes: Record\<string, string \| Constructor\<Codec> \| Record\<string, string> \| { _enum: string[] \| Record\<string, string \| null>  } \| { _set: Record\<string, number>  }>  } |

**Returns:** TypeRegistry