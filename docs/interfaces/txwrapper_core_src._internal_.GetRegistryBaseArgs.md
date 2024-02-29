[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / [\<internal\>](../modules/txwrapper_core_src._internal_.md) / GetRegistryBaseArgs

# Interface: GetRegistryBaseArgs

[txwrapper-core/src](../modules/txwrapper_core_src.md).[\<internal\>](../modules/txwrapper_core_src._internal_.md).GetRegistryBaseArgs

## Table of contents

### Properties

- [additionalTypes](txwrapper_core_src._internal_.GetRegistryBaseArgs.md#additionaltypes)
- [asCallsOnlyArg](txwrapper_core_src._internal_.GetRegistryBaseArgs.md#ascallsonlyarg)
- [chainProperties](txwrapper_core_src._internal_.GetRegistryBaseArgs.md#chainproperties)
- [metadataRpc](txwrapper_core_src._internal_.GetRegistryBaseArgs.md#metadatarpc)
- [signedExtensions](txwrapper_core_src._internal_.GetRegistryBaseArgs.md#signedextensions)
- [specTypes](txwrapper_core_src._internal_.GetRegistryBaseArgs.md#spectypes)
- [typesBundle](txwrapper_core_src._internal_.GetRegistryBaseArgs.md#typesbundle)
- [userExtensions](txwrapper_core_src._internal_.GetRegistryBaseArgs.md#userextensions)

## Properties

### additionalTypes

• `Optional` **additionalTypes**: `RegistryTypes`

Additional types to register in the registry.

#### Defined in

[txwrapper-core/src/core/metadata/getRegistryBase.ts:44](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L44)

___

### asCallsOnlyArg

• `Optional` **asCallsOnlyArg**: `boolean`

Used to reduce the metadata size by only having the calls

#### Defined in

[txwrapper-core/src/core/metadata/getRegistryBase.ts:28](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L28)

___

### chainProperties

• **chainProperties**: [`ChainProperties`](txwrapper_core_src.ChainProperties.md) \| `AnyJson`

Chain properties, normally returned by the `system_properties` call.

#### Defined in

[txwrapper-core/src/core/metadata/getRegistryBase.ts:16](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L16)

___

### metadataRpc

• **metadataRpc**: \`0x$\{string}\`

Used to set the correct metadata for the registry

#### Defined in

[txwrapper-core/src/core/metadata/getRegistryBase.ts:24](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L24)

___

### signedExtensions

• `Optional` **signedExtensions**: `string`[]

Array of signedExtensions

#### Defined in

[txwrapper-core/src/core/metadata/getRegistryBase.ts:32](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L32)

___

### specTypes

• **specTypes**: `RegistryTypes`

Chain specific type definitions to registry.

#### Defined in

[txwrapper-core/src/core/metadata/getRegistryBase.ts:20](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L20)

___

### typesBundle

• `Optional` **typesBundle**: `OverrideBundleType`

OverrideTypesBundle to set to registry

#### Defined in

[txwrapper-core/src/core/metadata/getRegistryBase.ts:40](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L40)

___

### userExtensions

• `Optional` **userExtensions**: `ExtDef`

User extensions used to inject into the type registry

#### Defined in

[txwrapper-core/src/core/metadata/getRegistryBase.ts:36](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-core/src/core/metadata/getRegistryBase.ts#L36)
