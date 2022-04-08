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
- [isImmortalEra](txwrapper_core_src.OptionsWithMeta.md#isimmortalera)
- [metadataRpc](txwrapper_core_src.OptionsWithMeta.md#metadatarpc)
- [registry](txwrapper_core_src.OptionsWithMeta.md#registry)
- [signedExtensions](txwrapper_core_src.OptionsWithMeta.md#signedextensions)
- [userExtensions](txwrapper_core_src.OptionsWithMeta.md#userextensions)

## Properties

### asCallsOnlyArg

• `Optional` **asCallsOnlyArg**: `boolean`

Used to reduce the metadata size by only having the calls

#### Defined in

[txwrapper-core/src/types/method.ts:21](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/method.ts#L21)

___

### isImmortalEra

• `Optional` **isImmortalEra**: `boolean`

Option to choose whether the constructed transaction will be immortal. If
immortal the default value will be '0x00', and when decoded it will return 0.
This option is used exclusively for unsigned transactions.

Note: When creating an Immortal tx, the blockHash should be set as the genesis hash.

#### Inherited from

[Options](txwrapper_core_src.Options.md).[isImmortalEra](txwrapper_core_src.Options.md#isimmortalera)

#### Defined in

[txwrapper-core/src/types/method.ts:132](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/method.ts#L132)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

The metadata of the runtime.

#### Defined in

[txwrapper-core/src/types/method.ts:17](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/method.ts#L17)

___

### registry

• **registry**: `TypeRegistry`

The type registry of the runtime.

#### Inherited from

[Options](txwrapper_core_src.Options.md).[registry](txwrapper_core_src.Options.md#registry)

#### Defined in

[txwrapper-core/src/types/method.ts:124](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/method.ts#L124)

___

### signedExtensions

• `Optional` **signedExtensions**: `string`[]

Array of signedExtensions

#### Defined in

[txwrapper-core/src/types/method.ts:25](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/method.ts#L25)

___

### userExtensions

• `Optional` **userExtensions**: `ExtDef`

User extensions used to inject into the type registry

#### Defined in

[txwrapper-core/src/types/method.ts:29](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/method.ts#L29)
