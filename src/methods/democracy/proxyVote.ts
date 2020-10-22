import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';
import { AccountVote } from './types';

export interface DemocracyProxyVoteArgs extends Args {
  /*
   * Referendum index.
   */
  refIndex: number;
  /**
   * Vote.
   */
  vote: AccountVote;
}

/**
 * Vote in a referendum on behalf of a stash.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 * @deprecated Update to the latest version of Substrate to use the proxy pallet.
 */
export function proxyVote(
  args: DemocracyProxyVoteArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  console.warn(
    '`democracy.proxyVote` is now deprecated. ' +
      'Update to the latest version of Substrate to use the proxy pallet.'
  );
  return createMethod(
    {
      method: {
        args,
        name: 'proxyVote',
        pallet: 'democracy',
      },
      ...info,
    },
    options
  );
}
