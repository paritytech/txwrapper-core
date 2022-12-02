[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-polkadot/src](txwrapper_polkadot_src.md) / [<internal\>](txwrapper_polkadot_src._internal_.md) / "/Users/tarikgul/Desktop/parity/tools-team/txwrapper-core/packages/txwrapper-polkadot/src/methods/crowdloan/index"

# Namespace: "/Users/tarikgul/Desktop/parity/tools-team/txwrapper-core/packages/txwrapper-polkadot/src/methods/crowdloan/index"

[txwrapper-polkadot/src](txwrapper_polkadot_src.md).[<internal>](txwrapper_polkadot_src._internal_.md)."/Users/tarikgul/Desktop/parity/tools-team/txwrapper-core/packages/txwrapper-polkadot/src/methods/crowdloan/index"

## Table of contents

### Interfaces

- [CroadloanWithdrawArgs](../interfaces/txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.CroadloanWithdrawArgs.md)
- [CrowdloanAddMemo](../interfaces/txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.CrowdloanAddMemo.md)
- [CrowdloanContributeArgs](../interfaces/txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.CrowdloanContributeArgs.md)

### Type aliases

- [MultiSignature](txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.md#multisignature)

### Functions

- [addMemo](txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.md#addmemo)
- [contribute](txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.md#contribute)
- [withdraw](txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.md#withdraw)

## Type aliases

### MultiSignature

Ƭ **MultiSignature**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Ecdsa?` | `string` |
| `Ed25519?` | `string` |
| `Sr25519?` | `string` |

#### Defined in

[txwrapper-polkadot/src/methods/crowdloan/types.ts:1](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-polkadot/src/methods/crowdloan/types.ts#L1)

## Functions

### addMemo

▸ **addMemo**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CrowdloanAddMemo`](../interfaces/txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.CrowdloanAddMemo.md) |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-polkadot/src/methods/crowdloan/addMemo.ts:14](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-polkadot/src/methods/crowdloan/addMemo.ts#L14)

___

### contribute

▸ **contribute**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CrowdloanContributeArgs`](../interfaces/txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.CrowdloanContributeArgs.md) |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-polkadot/src/methods/crowdloan/contribute.ts:17](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-polkadot/src/methods/crowdloan/contribute.ts#L17)

___

### withdraw

▸ **withdraw**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CroadloanWithdrawArgs`](../interfaces/txwrapper_polkadot_src._internal_.__Users_tarikgul_Desktop_parity_tools_team_txwrapper_core_packages_txwrapper_polkadot_src_methods_crowdloan_index_.CroadloanWithdrawArgs.md) |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-polkadot/src/methods/crowdloan/withdraw.ts:14](https://github.com/paritytech/txwrapper-core/blob/6c32f05/packages/txwrapper-polkadot/src/methods/crowdloan/withdraw.ts#L14)
