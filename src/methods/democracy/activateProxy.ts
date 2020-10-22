import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface DemocracyActivateProxyArgs extends Args {
  /**
   * Address to set as proxy, SS-58 encoded.
   */
  proxy: string;
}

/**
 * Specify a proxy that is already open to us. Called by the stash.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 * @deprecated Update to the latest version of Substrate to use the proxy pallet.
 */
export function activateProxy(
  args: DemocracyActivateProxyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  console.warn(
    '`democracy.activateProxy` is now deprecated. ' +
      'Update to the latest version of Substrate to use the proxy pallet.'
  );
  return createMethod(
    {
      method: {
        args,
        name: 'activateProxy',
        pallet: 'democracy',
      },
      ...info,
    },
    options
  );
}
