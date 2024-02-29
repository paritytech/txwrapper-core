[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / GetRegistryOptsCore

# Interface: GetRegistryOptsCore

[txwrapper-core/src](../modules/txwrapper_core_src.md).GetRegistryOptsCore

Options for `getRegistry*` functions.

## Hierarchy

- **`GetRegistryOptsCore`**

  ↳ [`GetRegistryOpts`](txwrapper_polkadot_src.GetRegistryOpts.md)

## Table of contents

### Properties

- [additionalTypes](txwrapper_core_src.GetRegistryOptsCore.md#additionaltypes)
- [asCallsOnlyArg](txwrapper_core_src.GetRegistryOptsCore.md#ascallsonlyarg)
- [chainName](txwrapper_core_src.GetRegistryOptsCore.md#chainname)
- [metadataRpc](txwrapper_core_src.GetRegistryOptsCore.md#metadatarpc)
- [properties](txwrapper_core_src.GetRegistryOptsCore.md#properties)
- [signedExtensions](txwrapper_core_src.GetRegistryOptsCore.md#signedextensions)
- [specName](txwrapper_core_src.GetRegistryOptsCore.md#specname)
- [specVersion](txwrapper_core_src.GetRegistryOptsCore.md#specversion)
- [typesBundle](txwrapper_core_src.GetRegistryOptsCore.md#typesbundle)
- [userExtensions](txwrapper_core_src.GetRegistryOptsCore.md#userextensions)

## Properties

### additionalTypes

• `Optional` **additionalTypes**: `RegistryTypes`

Additional types to register in the registry.

#### Defined in

[txwrapper-core/src/types/registry.ts:49](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L49)

___

### asCallsOnlyArg

• `Optional` **asCallsOnlyArg**: `boolean`

Used to reduce the metadata size by only having the calls

#### Defined in

[txwrapper-core/src/types/registry.ts:33](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L33)

___

### chainName

• **chainName**: `string`

chainName

#### Defined in

[txwrapper-core/src/types/registry.ts:17](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L17)

___

### metadataRpc

• **metadataRpc**: \`0x$\{string}\`

SCALE encoded runtime metadata as a hex string

#### Defined in

[txwrapper-core/src/types/registry.ts:25](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L25)

___

### properties

• `Optional` **properties**: [`ChainProperties`](txwrapper_core_src.ChainProperties.md)

Chain ss58format, token decimals, and token ID

#### Defined in

[txwrapper-core/src/types/registry.ts:29](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L29)

___

### signedExtensions

• `Optional` **signedExtensions**: `string`[]

Array of signedExtensions

#### Defined in

[txwrapper-core/src/types/registry.ts:37](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L37)

___

### specName

• **specName**: `string`

Runtime specName

#### Defined in

[txwrapper-core/src/types/registry.ts:13](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L13)

___

### specVersion

• **specVersion**: `number`

Runtime specVersion

#### Defined in

[txwrapper-core/src/types/registry.ts:21](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L21)

___

### typesBundle

• `Optional` **typesBundle**: `OverrideBundleType`

OverrideTypesBundle to set to registry

#### Defined in

[txwrapper-core/src/types/registry.ts:45](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L45)

___

### userExtensions

• `Optional` **userExtensions**: `ExtDef`

User extensions used to inject into the type registry

#### Defined in

[txwrapper-core/src/types/registry.ts:41](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/registry.ts#L41)
