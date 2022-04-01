[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / GetRegistryOptsCore

# Interface: GetRegistryOptsCore

[txwrapper-core/src](../modules/txwrapper_core_src.md).GetRegistryOptsCore

Options for `getRegistry*` functions.

## Hierarchy

- **`GetRegistryOptsCore`**

  ↳ [`GetRegistryOpts`](txwrapper_polkadot_src.GetRegistryOpts.md)

## Table of contents

### Properties

- [asCallsOnlyArg](txwrapper_core_src.GetRegistryOptsCore.md#ascallsonlyarg)
- [chainName](txwrapper_core_src.GetRegistryOptsCore.md#chainname)
- [metadataRpc](txwrapper_core_src.GetRegistryOptsCore.md#metadatarpc)
- [properties](txwrapper_core_src.GetRegistryOptsCore.md#properties)
- [signedExtensions](txwrapper_core_src.GetRegistryOptsCore.md#signedextensions)
- [specName](txwrapper_core_src.GetRegistryOptsCore.md#specname)
- [specVersion](txwrapper_core_src.GetRegistryOptsCore.md#specversion)
- [userExtensions](txwrapper_core_src.GetRegistryOptsCore.md#userextensions)

## Properties

### asCallsOnlyArg

• `Optional` **asCallsOnlyArg**: `boolean`

Used to reduce the metadata size by only having the calls

#### Defined in

[txwrapper-core/src/types/registry.ts:32](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-core/src/types/registry.ts#L32)

___

### chainName

• **chainName**: `string`

chainName

#### Defined in

[txwrapper-core/src/types/registry.ts:16](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-core/src/types/registry.ts#L16)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

SCALE encoded runtime metadata as a hex string

#### Defined in

[txwrapper-core/src/types/registry.ts:24](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-core/src/types/registry.ts#L24)

___

### properties

• `Optional` **properties**: [`ChainProperties`](txwrapper_core_src.ChainProperties.md)

Chain ss58format, token decimals, and token ID

#### Defined in

[txwrapper-core/src/types/registry.ts:28](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-core/src/types/registry.ts#L28)

___

### signedExtensions

• `Optional` **signedExtensions**: `string`[]

Array of signedExtensions

#### Defined in

[txwrapper-core/src/types/registry.ts:36](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-core/src/types/registry.ts#L36)

___

### specName

• **specName**: `string`

Runtime specName

#### Defined in

[txwrapper-core/src/types/registry.ts:12](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-core/src/types/registry.ts#L12)

___

### specVersion

• **specVersion**: `number`

Runtime specVersion

#### Defined in

[txwrapper-core/src/types/registry.ts:20](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-core/src/types/registry.ts#L20)

___

### userExtensions

• `Optional` **userExtensions**: `ExtDef`

User extensions used to inject into the type registry

#### Defined in

[txwrapper-core/src/types/registry.ts:40](https://github.com/paritytech/txwrapper-core/blob/f50cd9c/packages/txwrapper-core/src/types/registry.ts#L40)
