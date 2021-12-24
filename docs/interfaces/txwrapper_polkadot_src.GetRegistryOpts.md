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
- [specName](txwrapper_polkadot_src.GetRegistryOpts.md#specname)
- [specVersion](txwrapper_polkadot_src.GetRegistryOpts.md#specversion)

## Properties

### asCallsOnlyArg

• `Optional` **asCallsOnlyArg**: `boolean`

Used to reduce the metadata size by only having the calls

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[asCallsOnlyArg](txwrapper_core_src.GetRegistryOptsCore.md#ascallsonlyarg)

#### Defined in

[txwrapper-core/src/types/registry.ts:30](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L30)

___

### chainName

• **chainName**: `string`

chainName

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[chainName](txwrapper_core_src.GetRegistryOptsCore.md#chainname)

#### Defined in

[txwrapper-core/src/types/registry.ts:14](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L14)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

SCALE encoded runtime metadata as a hex string

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[metadataRpc](txwrapper_core_src.GetRegistryOptsCore.md#metadatarpc)

#### Defined in

[txwrapper-core/src/types/registry.ts:22](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L22)

___

### properties

• `Optional` **properties**: [`ChainProperties`](txwrapper_core_src.ChainProperties.md)

Chain ss58format, token decimals, and token ID

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[properties](txwrapper_core_src.GetRegistryOptsCore.md#properties)

#### Defined in

[txwrapper-core/src/types/registry.ts:26](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L26)

___

### specName

• **specName**: ``"kusama"`` \| ``"polkadot"`` \| ``"westend"`` \| ``"statemint"`` \| ``"statemine"``

Runtime specName

#### Overrides

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[specName](txwrapper_core_src.GetRegistryOptsCore.md#specname)

#### Defined in

[txwrapper-polkadot/src/index.ts:73](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-polkadot/src/index.ts#L73)

___

### specVersion

• **specVersion**: `number`

Runtime specVersion

#### Inherited from

[GetRegistryOptsCore](txwrapper_core_src.GetRegistryOptsCore.md).[specVersion](txwrapper_core_src.GetRegistryOptsCore.md#specversion)

#### Defined in

[txwrapper-core/src/types/registry.ts:18](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/registry.ts#L18)
