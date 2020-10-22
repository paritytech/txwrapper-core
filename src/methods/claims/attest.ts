import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface ClaimsAttestArgs extends Args {
  /**
   * The identity of the statement that is being attested to in the signature.
   */
  statement: string;
}

/**
 * Attest to a statement, needed to finalize the claims process. This method is
 * only available on Polkadot.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function attest(
  args: ClaimsAttestArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'attest',
        pallet: 'claims',
      },
      ...info,
    },
    options
  );
}
