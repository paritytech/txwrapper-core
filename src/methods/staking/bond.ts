import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingBondArgs extends Args {
  /**
   * The SS-58 encoded address of the Controller account.
   */
  controller: string;
  /**
   * The number of tokens to bond.
   */
  value: number | string;
  /**
   * The rewards destination. Can be "Stash", "Staked", "Controller" or "{ Account: accountId }"".
   */
  payee: string | { Account: string };
}

/**
 * Construct a transaction to bond funds and create a Stash account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function bond(
  args: StakingBondArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'bond',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}
