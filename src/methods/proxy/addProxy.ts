import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface ProxyAddProxy extends Args {
  /**
   * The account that the `caller` would like to make a proxy.
   */
  delegate: string;
  /**
   * The permissions for this proxy account. See the runtime for the `call` filters.
   * Current known types:
   *   - 'Any'
   *   - 'NonTransfer'
   *   - 'Governance'
   *   - 'Staking'
   */
  proxyType: string;
  /**
   * The number of blocks that an announcement must be in place for before the corresponding call
   * may be dispatched. If zero, then no announcement is needed.
   */
  delay: number | string;
}

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function addProxy(
  args: ProxyAddProxy,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'addProxy',
        pallet: 'proxy',
      },
      ...info,
    },
    options
  );
}
