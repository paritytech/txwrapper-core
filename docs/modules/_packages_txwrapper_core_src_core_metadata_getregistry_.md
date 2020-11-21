**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-core/src/core/metadata/getRegistry"

# Module: "packages/txwrapper-core/src/core/metadata/getRegistry"

## Index

### Interfaces

* [GetRegistryArgs](../interfaces/_packages_txwrapper_core_src_core_metadata_getregistry_.getregistryargs.md)

### Functions

* [getRegistry](_packages_txwrapper_core_src_core_metadata_getregistry_.md#getregistry)

## Functions

### getRegistry

▸ **getRegistry**(`__namedParameters`: { chainProperties: undefined \| null \| string \| number \| false \| true \| AnyJson[] \| { [index:string]: AnyJson;  } \| [ChainProperties](../interfaces/_packages_txwrapper_core_src_types_codec_.chainproperties.md) ; metadataRpc: string ; specTypes: Record\<string, string \| Constructor\<Codec> \| Record\<string, string> \| { _enum: string[] \| Record\<string, string \| null>  } \| { _set: Record\<string, number>  }>  }): TypeRegistry

*Defined in [packages/txwrapper-core/src/core/metadata/getRegistry.ts:25](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/core/metadata/getRegistry.ts#L25)*

Create a type registry given chainProperties, specTypes, and metadataRpc.

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { chainProperties: undefined \| null \| string \| number \| false \| true \| AnyJson[] \| { [index:string]: AnyJson;  } \| [ChainProperties](../interfaces/_packages_txwrapper_core_src_types_codec_.chainproperties.md) ; metadataRpc: string ; specTypes: Record\<string, string \| Constructor\<Codec> \| Record\<string, string> \| { _enum: string[] \| Record\<string, string \| null>  } \| { _set: Record\<string, number>  }>  } |

**Returns:** TypeRegistry
