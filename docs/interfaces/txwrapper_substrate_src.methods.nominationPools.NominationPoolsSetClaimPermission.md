[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md) / NominationPoolsSetClaimPermission

# Interface: NominationPoolsSetClaimPermission

[methods](../modules/txwrapper_substrate_src.methods.md).[nominationPools](../modules/txwrapper_substrate_src.methods.nominationPools.md).NominationPoolsSetClaimPermission

Base Argument object for methods.

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`NominationPoolsSetClaimPermission`**

## Table of contents

### Properties

- [permission](txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetClaimPermission.md#permission)

## Properties

### permission

• **permission**: `string`

Account to claim reward. The value will either be:
`Permissioned` | `PermissionlessCompound` | `PermissionlessWithdraw` | `PermissionlessAll`

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setClaimPermission.ts:14](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/nominationPools/setClaimPermission.ts#L14)
