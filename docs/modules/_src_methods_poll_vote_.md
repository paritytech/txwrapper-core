**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/poll/vote"

# Module: "src/methods/poll/vote"

## Index

### Interfaces

* [PollVoteArgs](../interfaces/_src_methods_poll_vote_.pollvoteargs.md)

### Functions

* [vote](_src_methods_poll_vote_.md#vote)

## Functions

### vote

▸ **vote**(`args`: [PollVoteArgs](../interfaces/_src_methods_poll_vote_.pollvoteargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/poll/vote.ts:23](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/poll/vote.ts#L23)*

Cast a vote on the poll.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [PollVoteArgs](../interfaces/_src_methods_poll_vote_.pollvoteargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
