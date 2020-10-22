import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingValidateArgs extends Args {
  /**
   * Set the desired commission for the validator. Value is Perbill.
   */
  prefs: {
    commission: number;
  };
}

/**
 * Declare the desire to validate for the origin controller.
 *
 * Can only be called when `EraElectionStatus` is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function validate(
  args: StakingValidateArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'validate',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}
