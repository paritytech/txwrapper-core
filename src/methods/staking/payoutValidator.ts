import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingPayoutValidatorArgs extends Args {
  /**
   * May not be lower than one following the most recently paid era. If it is
   * higher, then it indicates an instruction to skip the payout of all
   * previous eras.
   */
  era: number;
}

/**
 * Make one validator's payout for one era.
 * WARNING: once an era is payed for a validator such validator can't claim the
 * payout of previous era.
 * WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 * @deprecated Update to the latest version of Substrate to use `staking.payoutStakers` instead.
 */
export function payoutValidator(
  args: StakingPayoutValidatorArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  console.warn(
    '`staking.payoutValidator` is now deprecated. ' +
      'Update to the latest version of Substrate to use `staking.payoutStakers` instead.'
  );
  return createMethod(
    {
      method: {
        args,
        name: 'payoutValidator',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}
