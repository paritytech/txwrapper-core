import { Options, UnsignedTransaction } from './types';

/**
 * Encode an unsigned transaction to submit.
 *
 * @param unsigned - An Unsigned Transaction that will be encoded.
 * @param options - Registry used for constructing the payload.
 */
export function encodeUnsignedTransaction(
  unsigned: UnsignedTransaction,
  options: Options
): string {
  const tx = options.registry.createType(
    'Extrinsic',
    { method: unsigned.method },
    { version: unsigned.version }
  );
  return tx.toHex();
}
