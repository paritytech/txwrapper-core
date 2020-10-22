import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingWithdrawUnbondedArgs extends Args {
  numSlashingSpans: number;
}

/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function withdrawUnbonded(
  args: StakingWithdrawUnbondedArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'withdrawUnbonded',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}
