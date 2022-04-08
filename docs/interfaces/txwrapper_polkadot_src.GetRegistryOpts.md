[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-polkadot/src](../modules/txwrapper_polkadot_src.md) / GetRegistryOpts

# Interface: GetRegistryOpts

[txwrapper-polkadot/src](../modules/txwrapper_polkadot_src.md).GetRegistryOpts

Options for txwrapper-polkadot's `getRegistry` function.

## Hierarchy

- [`GetRegistryOptsCore`](txwrapper_core_src.GetRegistryOptsCore.md)

  ↳ **`GetRegistryOpts`**

## Table of contents

### Properties

- [asCallsOnlyArg](txwrapper_polkadot_src.GetRegistryOpts.md#ascallsonlyarg)
- [chainName](txwrapper_polkadot_src.GetRegistryOpts.md#chainname)
- [metadataRpc](txwrapper_polkadot_src.GetRegistryOpts.md#metadatarpc)
- [properties](txwrapper_polkadot_src.GetRegistryOpts.md#properties)
- [signedExtensions](txwrapper_polkadot_src.GetRegistryOpts.md#signedextensions)
- [specName](txwrapper_polkadot_src.GetRegistryOpts.md#specname)
- [specVersion](txwrapper_polkadot_src.GetRegistryOpts.md#specversion)
- [userExtensions](txwrapper_polkadot_src.GetRegistryOpts.md#userextensions)

## Properties

### asCallsOnlyArg

• `Optional` **asCallsOnlyArg**: `boolean`

Used to reduce the metadata size by only having the calls

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[asCallsOnlyArg](txwrapper_core_src.GetRegistryOptsCore.md#ascallsonlyarg)

#### Defined in

[txwrapper-core/src/types/registry.ts:32](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/registry.ts#L32)

___

### chainName

• **chainName**: `string`

chainName

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[chainName](txwrapper_core_src.GetRegistryOptsCore.md#chainname)

#### Defined in

[txwrapper-core/src/types/registry.ts:16](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/registry.ts#L16)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

SCALE encoded runtime metadata as a hex string

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[metadataRpc](txwrapper_core_src.GetRegistryOptsCore.md#metadatarpc)

#### Defined in

[txwrapper-core/src/types/registry.ts:24](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/registry.ts#L24)

___

### properties

• `Optional` **properties**: [`ChainProperties`](txwrapper_core_src.ChainProperties.md)

Chain ss58format, token decimals, and token ID

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[properties](txwrapper_core_src.GetRegistryOptsCore.md#properties)

#### Defined in

[txwrapper-core/src/types/registry.ts:28](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/registry.ts#L28)

___

### signedExtensions

• `Optional` **signedExtensions**: `string`[]

Array of signedExtensions

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[signedExtensions](txwrapper_core_src.GetRegistryOptsCore.md#signedextensions)

#### Defined in

[txwrapper-core/src/types/registry.ts:36](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/registry.ts#L36)

___

### specName

• **specName**: ``"kusama"`` \| ``"polkadot"`` \| ``"westend"`` \| ``"statemint"`` \| ``"statemine"``

Runtime specName

#### Overrides

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[specName](txwrapper_core_src.GetRegistryOptsCore.md#specname)

#### Defined in

[txwrapper-polkadot/src/index.ts:73](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-polkadot/src/index.ts#L73)

___

### specVersion

• **specVersion**: `number`

Runtime specVersion

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[specVersion](txwrapper_core_src.GetRegistryOptsCore.md#specversion)

#### Defined in

[txwrapper-core/src/types/registry.ts:20](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/registry.ts#L20)

___

### userExtensions

• `Optional` **userExtensions**: `ExtDef`

User extensions used to inject into the type registry

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[userExtensions](txwrapper_core_src.GetRegistryOptsCore.md#userextensions)

#### Defined in

[txwrapper-core/src/types/registry.ts:40](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-core/src/types/registry.ts#L40)
