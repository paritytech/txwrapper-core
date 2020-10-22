import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingPayoutNominatorArgs extends Args {
  /**
   * May not be lower than one following the most recently paid era. If it is
   * higher, then it indicates an instruction to skip the payout of all
   * previous eras.
   */
  era: number;
  /**
   * List of all validators that `who` had exposure to during `era` alongside
   * the index of the `who` in the clipped exposure of the validator. i.e. each
   * element is a tuple of `(validator, index of `who` in clipped exposure of
   * validator)`.
   */
  validators: [string, number][];
}

/**
 * Make one nominator's payout for one era.
 * WARNING: once an era is payed for a validator such validator can't claim the
 * payout of previous era.
 * WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 * @deprecated Update to the latest version of Substrate to use `staking.payoutStakers` instead.
 */
export function payoutNominator(
  args: StakingPayoutNominatorArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  console.warn(
    '`staking.payoutNominator` is now deprecated. ' +
      'Update to the latest version of Substrate to `staking.payoutStakers`.'
  );
  return createMethod(
    {
      method: {
        args,
        name: 'payoutNominator',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}
