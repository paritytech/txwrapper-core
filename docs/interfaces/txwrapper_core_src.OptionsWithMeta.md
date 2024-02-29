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
- [asSpecifiedCallsOnlyV14](txwrapper_core_src.OptionsWithMeta.md#asspecifiedcallsonlyv14)
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

[txwrapper-core/src/types/method.ts:21](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/types/method.ts#L21)

___

### asSpecifiedCallsOnlyV14

• `Optional` **asSpecifiedCallsOnlyV14**: `string`[]

Used to reduce the metadata size by only having specific inputted calls,
and reducing the types to only whats needed to construct the transaction.

An Array which contains all the pallets that should be included in the metadata

#### Defined in

[txwrapper-core/src/types/method.ts:28](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/types/method.ts#L28)

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

[txwrapper-core/src/types/method.ts:154](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/types/method.ts#L154)

___

### metadataRpc

• **metadataRpc**: \`0x$\{string}\`

The metadata of the runtime.

#### Defined in

[txwrapper-core/src/types/method.ts:17](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/types/method.ts#L17)

___

### registry

• **registry**: `TypeRegistry`

The type registry of the runtime.

#### Inherited from

[Options](txwrapper_core_src.Options.md).[registry](txwrapper_core_src.Options.md#registry)

#### Defined in

[txwrapper-core/src/types/method.ts:146](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/types/method.ts#L146)

___

### signedExtensions

• `Optional` **signedExtensions**: `string`[]

Array of signedExtensions

#### Defined in

[txwrapper-core/src/types/method.ts:32](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/types/method.ts#L32)

___

### userExtensions

• `Optional` **userExtensions**: `ExtDef`

User extensions used to inject into the type registry

#### Defined in

[txwrapper-core/src/types/method.ts:36](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/types/method.ts#L36)
