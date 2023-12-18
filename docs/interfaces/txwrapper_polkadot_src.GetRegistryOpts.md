[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-polkadot/src](../modules/txwrapper_polkadot_src.md) / GetRegistryOpts

# Interface: GetRegistryOpts

[txwrapper-polkadot/src](../modules/txwrapper_polkadot_src.md).GetRegistryOpts

Options for txwrapper-polkadot's `getRegistry` function.

## Hierarchy

- [`GetRegistryOptsCore`](txwrapper_core_src.GetRegistryOptsCore.md)

  ↳ **`GetRegistryOpts`**

## Table of contents

### Properties

- [additionalTypes](txwrapper_polkadot_src.GetRegistryOpts.md#additionaltypes)
- [asCallsOnlyArg](txwrapper_polkadot_src.GetRegistryOpts.md#ascallsonlyarg)
- [chainName](txwrapper_polkadot_src.GetRegistryOpts.md#chainname)
- [metadataRpc](txwrapper_polkadot_src.GetRegistryOpts.md#metadatarpc)
- [properties](txwrapper_polkadot_src.GetRegistryOpts.md#properties)
- [signedExtensions](txwrapper_polkadot_src.GetRegistryOpts.md#signedextensions)
- [specName](txwrapper_polkadot_src.GetRegistryOpts.md#specname)
- [specVersion](txwrapper_polkadot_src.GetRegistryOpts.md#specversion)
- [typesBundle](txwrapper_polkadot_src.GetRegistryOpts.md#typesbundle)
- [userExtensions](txwrapper_polkadot_src.GetRegistryOpts.md#userextensions)

## Properties

### additionalTypes

• `Optional` **additionalTypes**: `RegistryTypes`

Additional types to register in the registry.

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[additionalTypes](txwrapper_core_src.GetRegistryOptsCore.md#additionaltypes)

#### Defined in

[txwrapper-core/src/types/registry.ts:49](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/registry.ts#L49)

___

### asCallsOnlyArg

• `Optional` **asCallsOnlyArg**: `boolean`

Used to reduce the metadata size by only having the calls

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[asCallsOnlyArg](txwrapper_core_src.GetRegistryOptsCore.md#ascallsonlyarg)

#### Defined in

[txwrapper-core/src/types/registry.ts:33](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/registry.ts#L33)

___

### chainName

• **chainName**: `string`

chainName

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[chainName](txwrapper_core_src.GetRegistryOptsCore.md#chainname)

#### Defined in

[txwrapper-core/src/types/registry.ts:17](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/registry.ts#L17)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

SCALE encoded runtime metadata as a hex string

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[metadataRpc](txwrapper_core_src.GetRegistryOptsCore.md#metadatarpc)

#### Defined in

[txwrapper-core/src/types/registry.ts:25](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/registry.ts#L25)

___

### properties

• `Optional` **properties**: [`ChainProperties`](txwrapper_core_src.ChainProperties.md)

Chain ss58format, token decimals, and token ID

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[properties](txwrapper_core_src.GetRegistryOptsCore.md#properties)

#### Defined in

[txwrapper-core/src/types/registry.ts:29](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/registry.ts#L29)

___

### signedExtensions

• `Optional` **signedExtensions**: `string`[]

Array of signedExtensions

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[signedExtensions](txwrapper_core_src.GetRegistryOptsCore.md#signedextensions)

#### Defined in

[txwrapper-core/src/types/registry.ts:37](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/registry.ts#L37)

___

### specName

• **specName**: ``"statemine"`` \| ``"kusama"`` \| ``"polkadot"`` \| ``"westend"`` \| ``"statemint"`` \| ``"westmint"`` \| ``"asset-hub-kusama"`` \| ``"asset-hub-polkadot"`` \| ``"asset-hub-westend"``

Runtime specName

#### Overrides

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[specName](txwrapper_core_src.GetRegistryOptsCore.md#specname)

#### Defined in

[txwrapper-polkadot/src/index.ts:96](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-polkadot/src/index.ts#L96)

___

### specVersion

• **specVersion**: `number`

Runtime specVersion

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[specVersion](txwrapper_core_src.GetRegistryOptsCore.md#specversion)

#### Defined in

[txwrapper-core/src/types/registry.ts:21](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/registry.ts#L21)

___

### typesBundle

• `Optional` **typesBundle**: `OverrideBundleType`

OverrideTypesBundle to set to registry

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[typesBundle](txwrapper_core_src.GetRegistryOptsCore.md#typesbundle)

#### Defined in

[txwrapper-core/src/types/registry.ts:45](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/registry.ts#L45)

___

### userExtensions

• `Optional` **userExtensions**: `ExtDef`

User extensions used to inject into the type registry

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[userExtensions](txwrapper_core_src.GetRegistryOptsCore.md#userextensions)

#### Defined in

[txwrapper-core/src/types/registry.ts:41](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/registry.ts#L41)
