import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface ClaimsClaimAttestArgs extends Args {
  /**
   * The destination account to which to pay out the claim. This method is only
   * available on Polkadot.
   */
  dest: string;
  /**
   * The signature of an Ethereum signed message matching the format described
   * above.
   */
  ethereumSignature: string;
  /**
   * The identity of the statement that is being attested to in the signature.
   */
  statement: string;
}

/**
 * Make a claim to collect your DOTs by signing a statement.
 *
 * The dispatch origin for this call must be _None_.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function claimAttest(
  args: ClaimsClaimAttestArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'claimAttest',
        pallet: 'claims',
      },
      ...info,
    },
    options
  );
}
