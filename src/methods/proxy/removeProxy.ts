import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface ProxyRemoveProxy extends Args {
  /**
   * The account that the `caller` would like to unregister.
   */
  delegate: string;
  /**
   * The permissions currently enabled for the target proxy account.
   */
  proxyType: string;
  /**
   * The delay of the proxy to remove.
   */
  delay: string | number;
}

/**
 * Unregister a proxy account for the sender.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */

export function removeProxy(
  args: ProxyRemoveProxy,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'removeProxy',
        pallet: 'proxy',
      },
      ...info,
    },
    options
  );
}
