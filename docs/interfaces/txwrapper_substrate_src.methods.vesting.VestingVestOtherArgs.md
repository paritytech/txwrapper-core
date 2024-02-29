[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [vesting](../modules/txwrapper_substrate_src.methods.vesting.md) / VestingVestOtherArgs

# Interface: VestingVestOtherArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[vesting](../modules/txwrapper_substrate_src.methods.vesting.md).VestingVestOtherArgs

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`VestingVestOtherArgs`**

## Table of contents

### Properties

- [target](txwrapper_substrate_src.methods.vesting.VestingVestOtherArgs.md#target)

## Properties

### target

• **target**: `string`

The account whose vested funds should be unlocked. Must have funds still
locked under this module.

#### Defined in

[txwrapper-substrate/src/methods/vesting/vestOther.ts:14](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/vesting/vestOther.ts#L14)
