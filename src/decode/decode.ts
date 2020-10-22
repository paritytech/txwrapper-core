import { OptionsWithMeta, UnsignedTransaction } from '../util';
import { DecodedSignedTx, decodeSignedTx } from './decodeSignedTx';
import {
  DecodedSigningPayload,
  decodeSigningPayload,
} from './decodeSigningPayload';
import { DecodedUnsignedTx, decodeUnsignedTx } from './decodeUnsignedTx';

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param unsignedTx - The data to parse, as an unsigned tx.
 * @param options - Runtime-specific data used for decoding the transaction.
 * @param toInt - Whether or not to forcibly serialize integers in the call args
 * to base-10 strings. If false, integers will either be a number or hex.
 * Defaults to false
 */
export function decode(
  unsignedTx: UnsignedTransaction,
  options: OptionsWithMeta,
  toInt?: boolean
): DecodedUnsignedTx;

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signedTx - The data to parse, as a signed tx hex string.
 * @param options - Runtime-specific data used for decoding the transaction.
 * @param toInt - Whether or not to forcibly serialize integers in the call args
 * to base-10 strings. If false, integers will either be a number or hex.
 * Defaults to false
 */
export function decode(
  signedTx: string,
  options: OptionsWithMeta,
  toInt?: boolean
): DecodedSignedTx;

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signingPayload - The data to parse, as a signing payload hex string.
 * @param options - Runtime-specific data used for decoding the transaction.
 * @param toInt - Whether or not to forcibly serialize integers in the call args
 * to base-10 strings. If false, integers will either be a number or hex.
 * Defaults to false
 */
export function decode(
  signingPayload: string,
  options: OptionsWithMeta,
  toInt?: boolean
): DecodedSigningPayload;

export function decode(
  data: string | UnsignedTransaction,
  options: OptionsWithMeta,
  toInt = false
): DecodedSignedTx | DecodedUnsignedTx | DecodedSigningPayload {
  if (typeof data === 'string') {
    let decodedInfo: DecodedSigningPayload | DecodedSignedTx;
    try {
      decodedInfo = decodeSigningPayload(data, options, toInt);
    } catch {
      decodedInfo = decodeSignedTx(data, options, toInt);
    }
    return decodedInfo;
  }

  return decodeUnsignedTx(data, options, toInt);
}
