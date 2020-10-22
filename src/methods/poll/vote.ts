import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface PollVoteArgs extends Args {
  /**
   * The options to vote for. Must be a boolean array of length 4.
   */
  approvals: boolean[];
}

/**
 * Cast a vote on the poll.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function vote(
  args: PollVoteArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  if (args.approvals.length !== 4) {
    throw new Error(
      '`approvals` arg was not the correct length. ' +
        '`approvals` must be a boolean array with a length of 4.'
    );
  }

  return createMethod(
    {
      method: {
        args,
        name: 'vote',
        pallet: 'poll',
      },
      ...info,
    },
    options
  );
}
