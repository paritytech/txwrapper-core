**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-core/src/types/method"](../modules/_txwrapper_core_src_types_method_.md) / OptionsWithMeta

# Interface: OptionsWithMeta

Runtime-specific options for encoding/decoding transactions. Pass these
options to functions that require registry and metadata.

## Hierarchy

* [Options](_txwrapper_core_src_types_method_.options.md)

  ↳ **OptionsWithMeta**

## Index

### Properties

* [metadataRpc](_txwrapper_core_src_types_method_.optionswithmeta.md#metadatarpc)
* [registry](_txwrapper_core_src_types_method_.optionswithmeta.md#registry)

## Properties

### metadataRpc

•  **metadataRpc**: string

*Defined in [packages/txwrapper-core/src/types/method.ts:16](https://github.com/paritytech/txwrapper-core/blob/731a943/packages/txwrapper-core/src/types/method.ts#L16)*

The metadata of the runtime.

___

### registry

•  **registry**: TypeRegistry

*Inherited from [OptionsWithMeta](_txwrapper_core_src_types_method_.optionswithmeta.md).[registry](_txwrapper_core_src_types_method_.optionswithmeta.md#registry)*

*Defined in [packages/txwrapper-core/src/types/method.ts:118](https://github.com/paritytech/txwrapper-core/blob/731a943/packages/txwrapper-core/src/types/method.ts#L118)*

The type registry of the runtime.
