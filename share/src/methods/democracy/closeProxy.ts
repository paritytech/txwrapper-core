import {
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

/**
 * Clear the proxy. Called by the proxy.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 * @deprecated Update to the latest version of Substrate to use the proxy pallet.
 */
export function closeProxy(
  args: {},
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  console.warn(
    '`democracy.closeProxy` is now deprecated. ' +
      'Update to the latest version of Substrate to use the proxy pallet.'
  );
  return createMethod(
    {
      method: {
        args,
        name: 'closeProxy',
        pallet: 'democracy',
      },
      ...info,
    },
    options
  );
}
