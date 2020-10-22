import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface VestingVestOtherArgs extends Args {
  /**
   * The account whose vested funds should be unlocked. Must have funds still
   * locked under this module.
   */
  target: string;
}

/**
 * Unlock any vested funds of a `target` account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function vestOther(
  args: VestingVestOtherArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'vestOther',
        pallet: 'vesting',
      },
      ...info,
    },
    options
  );
}
