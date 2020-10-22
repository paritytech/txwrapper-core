import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface SystemRemarkArgs extends Args {
  /**
   * The remark to set on chain, in hex or bytes.
   */
  remark: string;
}

/**
 * Make some on-chain remark.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function remark(
  args: SystemRemarkArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'remark',
        pallet: 'system',
      },
      ...info,
    },
    options
  );
}
