import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingBondExtraArgs extends Args {
  /**
   * The maximum amount to bond.
   */
  maxAdditional: number | string;
}

/**
 * Add some extra amount that have appeared in the stash `free_balance` into
 * the balance up for staking.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function bondExtra(
  args: StakingBondExtraArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'bondExtra',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}
