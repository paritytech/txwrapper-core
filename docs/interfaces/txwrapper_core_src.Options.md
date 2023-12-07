[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / Options

# Interface: Options

[txwrapper-core/src](../modules/txwrapper_core_src.md).Options

Runtime-specific options for encoding transactions. Pass these options to
functions that only require registry.

## Hierarchy

- **`Options`**

  ↳ [`OptionsWithMeta`](txwrapper_core_src.OptionsWithMeta.md)

## Table of contents

### Properties

- [isImmortalEra](txwrapper_core_src.Options.md#isimmortalera)
- [registry](txwrapper_core_src.Options.md#registry)

## Properties

### isImmortalEra

• `Optional` **isImmortalEra**: `boolean`

Option to choose whether the constructed transaction will be immortal. If
immortal the default value will be '0x00', and when decoded it will return 0.
This option is used exclusively for unsigned transactions.

Note: When creating an Immortal tx, the blockHash should be set as the genesis hash.

#### Defined in

[txwrapper-core/src/types/method.ts:156](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/method.ts#L156)

___

### registry

• **registry**: `TypeRegistry`

The type registry of the runtime.

#### Defined in

[txwrapper-core/src/types/method.ts:148](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-core/src/types/method.ts#L148)
