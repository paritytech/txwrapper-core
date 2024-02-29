[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / nominationPools

# Namespace: nominationPools

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).nominationPools

## Table of contents

### Interfaces

- [NominationPoolsBondExtra](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtra.md)
- [NominationPoolsBondExtraOther](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtraOther.md)
- [NominationPoolsChill](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsChill.md)
- [NominationPoolsClaimCommission](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsClaimCommission.md)
- [NominationPoolsClaimPayoutOther](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsClaimPayoutOther.md)
- [NominationPoolsCreate](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md)
- [NominationPoolsCreateWithPoolId](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreateWithPoolId.md)
- [NominationPoolsJoin](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsJoin.md)
- [NominationPoolsNominate](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsNominate.md)
- [NominationPoolsPoolWithdrawUnbonded](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsPoolWithdrawUnbonded.md)
- [NominationPoolsSetClaimPermission](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetClaimPermission.md)
- [NominationPoolsSetCommission](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommission.md)
- [NominationPoolsSetCommissionChangeRate](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommissionChangeRate.md)
- [NominationPoolsSetCommissionMax](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommissionMax.md)
- [NominationPoolsSetConfigs](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetConfigs.md)
- [NominationPoolsSetMetadata](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetMetadata.md)
- [NominationPoolsSetState](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetState.md)
- [NominationPoolsUnbond](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsUnbond.md)
- [NominationPoolsUpdateRoles](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsUpdateRoles.md)
- [NominationPoolsWithdrawUnbonded](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsWithdrawUnbonded.md)

### Type Aliases

- [ConfigOp](txwrapper_substrate_src.methods.nominationPools.md#configop)

### Functions

- [bondExtra](txwrapper_substrate_src.methods.nominationPools.md#bondextra)
- [bondExtraOther](txwrapper_substrate_src.methods.nominationPools.md#bondextraother)
- [chill](txwrapper_substrate_src.methods.nominationPools.md#chill)
- [claimCommission](txwrapper_substrate_src.methods.nominationPools.md#claimcommission)
- [claimPayout](txwrapper_substrate_src.methods.nominationPools.md#claimpayout)
- [claimPayoutOther](txwrapper_substrate_src.methods.nominationPools.md#claimpayoutother)
- [create](txwrapper_substrate_src.methods.nominationPools.md#create)
- [createWithPoolId](txwrapper_substrate_src.methods.nominationPools.md#createwithpoolid)
- [join](txwrapper_substrate_src.methods.nominationPools.md#join)
- [nominate](txwrapper_substrate_src.methods.nominationPools.md#nominate)
- [poolWithdrawUnbonded](txwrapper_substrate_src.methods.nominationPools.md#poolwithdrawunbonded)
- [setClaimPermission](txwrapper_substrate_src.methods.nominationPools.md#setclaimpermission)
- [setCommission](txwrapper_substrate_src.methods.nominationPools.md#setcommission)
- [setCommissionChangeRate](txwrapper_substrate_src.methods.nominationPools.md#setcommissionchangerate)
- [setCommissionMax](txwrapper_substrate_src.methods.nominationPools.md#setcommissionmax)
- [setConfigs](txwrapper_substrate_src.methods.nominationPools.md#setconfigs)
- [setMetadata](txwrapper_substrate_src.methods.nominationPools.md#setmetadata)
- [setState](txwrapper_substrate_src.methods.nominationPools.md#setstate)
- [unbond](txwrapper_substrate_src.methods.nominationPools.md#unbond)
- [updateRoles](txwrapper_substrate_src.methods.nominationPools.md#updateroles)
- [withdrawUnbonded](txwrapper_substrate_src.methods.nominationPools.md#withdrawunbonded)

## Type Aliases

### ConfigOp

Ƭ **ConfigOp**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Noop?` | ``null`` |
| `Remove?` | ``null`` |
| `Set` | `T` |

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setConfigs.ts:9](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setConfigs.ts#L9)

## Functions

### bondExtra

▸ **bondExtra**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Bond `extra` more funds from `origin` into the pool to which they already belong.

Additional funds can come from either the free balance of the account, or from the
accumulated rewards, see [`BondExtra`].

Bonding extra funds implies an automatic payout of all pending rewards as well.
See `bond_extra_other` to bond pending rewards of `other` members.

NOTE: this transaction is implemented with the sole purpose of readability and
correctness, not optimization. We read/write several storage items multiple times instead
of just once, in the spirit of reusing code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsBondExtra`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtra.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/bondExtra.ts:39](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/bondExtra.ts#L39)

___

### bondExtraOther

▸ **bondExtraOther**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

`origin` bonds funds from `extra` for some pool member `member` into their respective
pools.

`origin` can bond extra funds from free balance or pending rewards when `origin ==
other`.

In the case of `origin != other`, `origin` can only bond extra pending rewards of
`other` members assuming set_claim_permission for the given member is
`PermissionlessAll` or `PermissionlessCompound`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsBondExtraOther`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsBondExtraOther.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/bondExtraOther.ts:33](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/bondExtraOther.ts#L33)

___

### chill

▸ **chill**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Chill on behalf of the pool.

The dispatch origin of this call must be signed by the pool nominator or the pool
root role, same as [`Pallet::nominate`].

This directly forwards the call to the staking pallet, on behalf of the pool bonded
account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsChill`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsChill.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/chill.ts:29](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/chill.ts#L29)

___

### claimCommission

▸ **claimCommission**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Claim pending commission.

The dispatch origin of this call must be signed by the `root` role of the pool. Pending
commission is paid out and added to total claimed commission`. Total pending commission
is reset to zero. the current.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsClaimCommission`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsClaimCommission.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/claimCommission.ts:27](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/claimCommission.ts#L27)

___

### claimPayout

▸ **claimPayout**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

A bonded member can use this to claim their payout based on the rewards that the pool
	has accumulated since their last claimed payout (OR since joining if this is their first
	time claiming rewards). The payout will be transferred to the member's account.

	The member will earn rewards pro rata based on the members stake vs the sum of the
	members in the pools stake. Rewards do not "expire".

	See `claim_payout_other` to caim rewards on bahalf of some `other` pool member.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`EmptyArgs`](txwrapper_core_src.md#emptyargs) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/claimPayout.ts:23](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/claimPayout.ts#L23)

___

### claimPayoutOther

▸ **claimPayoutOther**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

`origin` can claim payouts on some pool member `other`'s behalf.

Pool member `other` must have a `PermissionlessAll` or `PermissionlessWithdraw` in order
for this call to be successful.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsClaimPayoutOther`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsClaimPayoutOther.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/claimPayoutOther.ts:26](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/claimPayoutOther.ts#L26)

___

### create

▸ **create**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Create a new delegation pool.

# Note

In addition to `amount`, the caller will transfer the existential deposit; so the caller
needs at have at least `amount + existential_deposit` transferrable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsCreate`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreate.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/create.ts:42](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/create.ts#L42)

___

### createWithPoolId

▸ **createWithPoolId**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Create a new delegation pool with a previously used pool id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsCreateWithPoolId`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsCreateWithPoolId.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/createWithPoolId.ts:24](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/createWithPoolId.ts#L24)

___

### join

▸ **join**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Stake funds with a pool. The amount to bond is transferred from the member to the
pools account and immediately increases the pools bond.

Note:

- An account can only be a member of a single pool.
- An account cannot join the same pool multiple times.
- This call will *not* dust the member account, so the member must have at least
  `existential deposit + amount` in their account.
- Only a pool with [`PoolState::Open`] can be joined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsJoin`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsJoin.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/join.ts:36](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/join.ts#L36)

___

### nominate

▸ **nominate**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Nominate on behalf of the pool.

The dispatch origin of this call must be signed by the pool nominator or the pool
root role.

This directly forwards the call to the staking pallet, on behalf of the pool bonded
account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsNominate`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsNominate.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/nominate.ts:33](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/nominate.ts#L33)

___

### poolWithdrawUnbonded

▸ **poolWithdrawUnbonded**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Call `withdraw_unbonded` for the pools account. This call can be made by any account.

This is useful if their are too many unlocking chunks to call `unbond`, and some
can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
would probably see an error like `NoMoreChunks` emitted from the staking system when
they attempt to unbond.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsPoolWithdrawUnbonded`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsPoolWithdrawUnbonded.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/poolWithdrawUnbonded.ts:32](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/poolWithdrawUnbonded.ts#L32)

___

### setClaimPermission

▸ **setClaimPermission**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Allows a pool member to set a claim permission to allow or disallow permissionless
bonding and withdrawing.

By default, this is `Permissioned`, which implies only the pool member themselves can
claim their pending rewards. If a pool member wishes so, they can set this to
`PermissionlessAll` to allow any account to claim their rewards and bond extra to the
pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsSetClaimPermission`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetClaimPermission.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setClaimPermission.ts:30](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setClaimPermission.ts#L30)

___

### setCommission

▸ **setCommission**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Set the commission of a pool.

Both a commission percentage and a commission payee must be provided in the `current`
tuple. Where a `current` of `None` is provided, any current commission will be removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsSetCommission`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommission.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setCommission.ts:31](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setCommission.ts#L31)

___

### setCommissionChangeRate

▸ **setCommissionChangeRate**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Set the commission of a pool.

Both a commission percentage and a commission payee must be provided in the `current`
tuple. Where a `current` of `None` is provided, any current commission will be removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsSetCommissionChangeRate`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommissionChangeRate.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setCommissionChangeRate.ts:36](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setCommissionChangeRate.ts#L36)

___

### setCommissionMax

▸ **setCommissionMax**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Set the maximum commission of a pool.

- Initial max can be set to any `Perbill`, and only smaller values thereafter.
- Current commission will be lowered in the event it is higher than a new max
  commission.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsSetCommissionMax`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetCommissionMax.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setCommissionMax.ts:31](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setCommissionMax.ts#L31)

___

### setConfigs

▸ **setConfigs**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Update configurations for the nomination pools. The origin for this call must be
Root.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsSetConfigs`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetConfigs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setConfigs.ts:50](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setConfigs.ts#L50)

___

### setMetadata

▸ **setMetadata**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Set a new metadata for the pool.

The dispatch origin of this call must be signed by the bouncer, or the root role of the
pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsSetMetadata`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetMetadata.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setMetadata.ts:30](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setMetadata.ts#L30)

___

### setState

▸ **setState**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Set a new state for the pool.

 If a pool is already in the `Destroying` state, then under no condition can its state
 change again.

 The dispatch origin of this call must be either:

 1. signed by the bouncer, or the root role of the pool,
 2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
    then the state of the pool can be permissionlessly changed to `Destroying`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsSetState`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsSetState.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/setState.ts:37](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/setState.ts#L37)

___

### unbond

▸ **unbond**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
implicitly collects the rewards one last time, since not doing so would mean some
rewards would be forfeited.

Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
account).

# Conditions for a permissionless dispatch.

The pool is blocked and the caller is either the root or bouncer. This is refereed to
as a kick.
The pool is destroying and the member is not the depositor.
The pool is destroying, the member is the depositor and no other members are in the
pool.

## Conditions for permissioned dispatch (i.e. the caller is also the
`member_account`):

The caller is not the depositor.
The caller is the depositor, the pool is destroying and no other members are in the
pool.

# Note

If there are too many unlocking chunks to unbond with the pool account,
[`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.
The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]
to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks
are available). However, it may not be possible to release the current unlocking chunks,
in which case, the result of this call will likely be the `NoMoreChunks` error from the
staking system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsUnbond`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsUnbond.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/unbond.ts:57](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/unbond.ts#L57)

___

### updateRoles

▸ **updateRoles**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Update the roles of the pool.

The root is the only entity that can change any of the roles, including itself,
excluding the depositor, who can never change.

It emits an event, notifying UIs of the role change. This event is quite relevant to
most pool members and they should be informed of changes to pool roles.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsUpdateRoles`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsUpdateRoles.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/updateRoles.ts:43](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/updateRoles.ts#L43)

___

### withdrawUnbonded

▸ **withdrawUnbonded**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
error is returned.

Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
account).

# Conditions for a permissionless dispatch

The pool is in destroy mode and the target is not the depositor.
The target is the depositor and they are the only member in the sub pools.
The pool is blocked and the caller is either the root or bouncer.

# Conditions for permissioned dispatch

The caller is the target and they are not the depositor.

# Note

If the target is the depositor, the pool will be destroyed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`NominationPoolsWithdrawUnbonded`](../interfaces/txwrapper_substrate_src.methods.nominationPools.NominationPoolsWithdrawUnbonded.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/nominationPools/withdrawUnbonded.ts:45](https://github.com/paritytech/txwrapper-core/blob/a09c1f6/packages/txwrapper-substrate/src/methods/nominationPools/withdrawUnbonded.ts#L45)
