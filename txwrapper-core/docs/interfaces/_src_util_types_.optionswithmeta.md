**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/util/types"](../modules/_src_util_types_.md) / OptionsWithMeta

# Interface: OptionsWithMeta

Runtime-specific options for encoding/decoding transactions. Pass these
options to functions that require registry and metadata.

## Hierarchy

* [Options](_src_util_types_.options.md)

  ↳ **OptionsWithMeta**

## Index

### Properties

* [metadataRpc](_src_util_types_.optionswithmeta.md#metadatarpc)
* [registry](_src_util_types_.optionswithmeta.md#registry)

## Properties

### metadataRpc

•  **metadataRpc**: string

*Defined in [src/util/types.ts:94](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L94)*

The metadata of the runtime.

___

### registry

•  **registry**: TypeRegistry

*Inherited from [Options](_src_util_types_.options.md).[registry](_src_util_types_.options.md#registry)*

*Defined in [src/util/types.ts:83](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L83)*

The type registry of the runtime.
