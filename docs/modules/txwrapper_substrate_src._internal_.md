[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Interfaces

- [ProxyAnnounceArgs](../interfaces/txwrapper_substrate_src._internal_.ProxyAnnounceArgs.md)
- [ProxyCreatePureArgs](../interfaces/txwrapper_substrate_src._internal_.ProxyCreatePureArgs.md)
- [ProxyKillPureArgs](../interfaces/txwrapper_substrate_src._internal_.ProxyKillPureArgs.md)

### Type Aliases

- [AccountVote](txwrapper_substrate_src._internal_.md#accountvote)
- [Timepoint](txwrapper_substrate_src._internal_.md#timepoint)
- [Vote](txwrapper_substrate_src._internal_.md#vote)

## Type Aliases

### AccountVote

Ƭ **AccountVote**: \{ `Standard`: \{ `balance`: `number` ; `vote`: [`Vote`](txwrapper_substrate_src._internal_.md#vote)  }  } \| \{ `Split`: \{ `aye`: `number` ; `nay`: `number`  }  }

A vote in a referendum. Can be one of:
- Standard: A standard vote, one-way (approve or reject) with a given amount
of conviction.
- Split: A split vote with balances given for both ways, and with no
conviction. This is useful for parachains, which vote on behalf of their 
participants and are free to choose their own way of splitting up the total
balance. The stake behind a parachain can e.g. be split e.g. 2/3 aye and
1/3 nay.

#### Defined in

[txwrapper-substrate/src/methods/democracy/types.ts:30](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/democracy/types.ts#L30)

___

### Timepoint

Ƭ **Timepoint**: `Object`

A global extrinsic index, formed as the extrinsic index within a block, together with that
block's height. This allows a transaction in which a multisig operation of a particular
multisig account was created to be uniquely identified.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `height` | `number` \| `string` | The height of the chain at the point in time. |
| `index` | `number` \| `string` | The index of the extrinsic in the block it was executed in. |

#### Defined in

[txwrapper-substrate/src/methods/multisig/types.ts:6](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/multisig/types.ts#L6)

___

### Vote

Ƭ **Vote**: `Object`

A vote in a referendum

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aye` | `boolean` |
| `conviction` | `ArrayElementType`\<typeof `AllConvictions`\> |

#### Defined in

[txwrapper-substrate/src/methods/democracy/types.ts:7](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/democracy/types.ts#L7)
