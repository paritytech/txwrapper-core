import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface DemocracyDeactivateProxyArgs extends Args {
  /**
   * The address of the proxy to remove, SS-58 encoded.
   */
  proxy: string;
}

/**
 * Deactivate the proxy, but leave open to this account. Called by the stash.
 * The proxy must already be active.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 * @deprecated Update to the latest version of Substrate to use the proxy pallet.
 */
export function deactivateProxy(
  args: DemocracyDeactivateProxyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  console.warn(
    '`democracy.deactivateProxy` is now deprecated. ' +
      'Update to the latest version of Substrate to use the proxy pallet.'
  );
  return createMethod(
    {
      method: {
        args,
        name: 'deactivateProxy',
        pallet: 'democracy',
      },
      ...info,
    },
    options
  );
}
