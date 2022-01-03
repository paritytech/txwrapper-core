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
- [specName](txwrapper_core_src.GetRegistryOptsCore.md#specname)
- [specVersion](txwrapper_core_src.GetRegistryOptsCore.md#specversion)

## Properties

### asCallsOnlyArg

• `Optional` **asCallsOnlyArg**: `boolean`

Used to reduce the metadata size by only having the calls

#### Defined in

[txwrapper-core/src/types/registry.ts:30](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L30)

___

### chainName

• **chainName**: `string`

chainName

#### Defined in

[txwrapper-core/src/types/registry.ts:14](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L14)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

SCALE encoded runtime metadata as a hex string

#### Defined in

[txwrapper-core/src/types/registry.ts:22](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L22)

___

### properties

• `Optional` **properties**: [`ChainProperties`](txwrapper_core_src.ChainProperties.md)

Chain ss58format, token decimals, and token ID

#### Defined in

[txwrapper-core/src/types/registry.ts:26](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L26)

___

### specName

• **specName**: `string`

Runtime specName

#### Defined in

[txwrapper-core/src/types/registry.ts:10](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L10)

___

### specVersion

• **specVersion**: `number`

Runtime specVersion

#### Defined in

[txwrapper-core/src/types/registry.ts:18](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L18)
