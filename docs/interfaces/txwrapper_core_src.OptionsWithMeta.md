[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / OptionsWithMeta

# Interface: OptionsWithMeta

[txwrapper-core/src](../modules/txwrapper_core_src.md).OptionsWithMeta

Runtime-specific options for encoding/decoding transactions. Pass these
options to functions that require registry and metadata.

## Hierarchy

- [`Options`](txwrapper_core_src.Options.md)

  ↳ **`OptionsWithMeta`**

## Table of contents

### Properties

- [asCallsOnlyArg](txwrapper_core_src.OptionsWithMeta.md#ascallsonlyarg)
- [metadataRpc](txwrapper_core_src.OptionsWithMeta.md#metadatarpc)
- [registry](txwrapper_core_src.OptionsWithMeta.md#registry)

## Properties

### asCallsOnlyArg

• `Optional` **asCallsOnlyArg**: `boolean`

Used to reduce the metadata size by only having the calls

#### Defined in

[txwrapper-core/src/types/method.ts:20](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L20)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

The metadata of the runtime.

#### Defined in

[txwrapper-core/src/types/method.ts:16](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L16)

___

### registry

• **registry**: `TypeRegistry`

The type registry of the runtime.

#### Inherited from

[Options](txwrapper_core_src.Options.md).[registry](txwrapper_core_src.Options.md#registry)

#### Defined in

[txwrapper-core/src/types/method.ts:115](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L115)
