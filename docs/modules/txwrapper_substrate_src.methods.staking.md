[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / staking

# Namespace: staking

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).staking

## Table of contents

### Interfaces

- [StakingBondArgs](../interfaces/txwrapper_substrate_src.methods.staking.StakingBondArgs.md)
- [StakingBondExtraArgs](../interfaces/txwrapper_substrate_src.methods.staking.StakingBondExtraArgs.md)
- [StakingNominateArgs](../interfaces/txwrapper_substrate_src.methods.staking.StakingNominateArgs.md)
- [StakingPayoutStakersArgs](../interfaces/txwrapper_substrate_src.methods.staking.StakingPayoutStakersArgs.md)
- [StakingRebondArgs](../interfaces/txwrapper_substrate_src.methods.staking.StakingRebondArgs.md)
- [StakingSetPayeeArgs](../interfaces/txwrapper_substrate_src.methods.staking.StakingSetPayeeArgs.md)
- [StakingUnbondArgs](../interfaces/txwrapper_substrate_src.methods.staking.StakingUnbondArgs.md)
- [StakingValidateArgs](../interfaces/txwrapper_substrate_src.methods.staking.StakingValidateArgs.md)
- [StakingWithdrawUnbondedArgs](../interfaces/txwrapper_substrate_src.methods.staking.StakingWithdrawUnbondedArgs.md)

### Functions

- [bond](txwrapper_substrate_src.methods.staking.md#bond)
- [bondExtra](txwrapper_substrate_src.methods.staking.md#bondextra)
- [chill](txwrapper_substrate_src.methods.staking.md#chill)
- [nominate](txwrapper_substrate_src.methods.staking.md#nominate)
- [payoutStakers](txwrapper_substrate_src.methods.staking.md#payoutstakers)
- [rebond](txwrapper_substrate_src.methods.staking.md#rebond)
- [setController](txwrapper_substrate_src.methods.staking.md#setcontroller)
- [setPayee](txwrapper_substrate_src.methods.staking.md#setpayee)
- [unbond](txwrapper_substrate_src.methods.staking.md#unbond)
- [validate](txwrapper_substrate_src.methods.staking.md#validate)
- [withdrawUnbonded](txwrapper_substrate_src.methods.staking.md#withdrawunbonded)

## Functions

### bond

▸ **bond**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Construct a transaction to bond funds and create a Stash account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`StakingBondArgs`](../interfaces/txwrapper_substrate_src.methods.staking.StakingBondArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/bond.ts:24](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/bond.ts#L24)

___

### bondExtra

▸ **bondExtra**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Add some extra amount from the stash's `free_balance` into
the balance up for staking.

Can only be called when `EraElectionStatus` is `Closed`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`StakingBondExtraArgs`](../interfaces/txwrapper_substrate_src.methods.staking.StakingBondExtraArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/bondExtra.ts:26](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/bondExtra.ts#L26)

___

### chill

▸ **chill**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Declare the desire to cease validating or nominating. Does not unbond funds.

Can only be called when `EraElectionStatus` is `Closed`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/chill.ts:17](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/chill.ts#L17)

___

### nominate

▸ **nominate**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Construct a transaction to nominate. This must be called by the _Controller_ account.

Can only be called when `EraElectionStatus` is `Closed`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`StakingNominateArgs`](../interfaces/txwrapper_substrate_src.methods.staking.StakingNominateArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/nominate.ts:28](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/nominate.ts#L28)

___

### payoutStakers

▸ **payoutStakers**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Pay out all the stakers behind a single validator for a single era.

Any account can call this function, even if it is not one of the stakers.

Can only be called when `EraElectionStatus` is `Closed`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`StakingPayoutStakersArgs`](../interfaces/txwrapper_substrate_src.methods.staking.StakingPayoutStakersArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/payoutStakers.ts:34](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/payoutStakers.ts#L34)

___

### rebond

▸ **rebond**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Rebond a portion of the stash scheduled to be unlocked.

The dispatch origin must be signed by the controller, and it can be only called when
`EraElectionStatus` is `Closed`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`StakingRebondArgs`](../interfaces/txwrapper_substrate_src.methods.staking.StakingRebondArgs.md) |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/rebond.ts:23](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/rebond.ts#L23)

___

### setController

▸ **setController**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

(Re-)sets the controller of a stash to the stash itself. Comes into effect at the beginning of the next era.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`Args`](txwrapper_core_src.md#args) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/setController.ts:16](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/setController.ts#L16)

___

### setPayee

▸ **setPayee**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

(Re-)set the payment target for staking rewards.

Comes into effect at the beginning of the next era.

 The dispatch origin for this call must be _Signed_ by the controller, not the stash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`StakingSetPayeeArgs`](../interfaces/txwrapper_substrate_src.methods.staking.StakingSetPayeeArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/setPayee.ts:27](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/setPayee.ts#L27)

___

### unbond

▸ **unbond**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Construct a transaction to unbond funds from a Stash account. This must be
called by the _Controller_ account.

Can only be called when `EraElectionStatus` is `Closed`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`StakingUnbondArgs`](../interfaces/txwrapper_substrate_src.methods.staking.StakingUnbondArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/unbond.ts:26](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/unbond.ts#L26)

___

### validate

▸ **validate**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Declare the desire to validate for the origin controller.

Can only be called when `EraElectionStatus` is `Closed`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`StakingValidateArgs`](../interfaces/txwrapper_substrate_src.methods.staking.StakingValidateArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/validate.ts:27](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/validate.ts#L27)

___

### withdrawUnbonded

▸ **withdrawUnbonded**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

If 100% of staked funds are withdrawn, cleans up staking-related
storage for the account and decrements the ref_count. Note that accounts
that set session keys must remove them before calling this, else they will
lose their Controller status and be unable to remove them
without bonding some funds again.

Can only be called when `EraElectionStatus` is `Closed`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`StakingWithdrawUnbondedArgs`](../interfaces/txwrapper_substrate_src.methods.staking.StakingWithdrawUnbondedArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/staking/withdrawUnbonded.ts:26](https://github.com/paritytech/txwrapper-core/blob/bb9e677/packages/txwrapper-substrate/src/methods/staking/withdrawUnbonded.ts#L26)
