import {
	DecodedSignedTx,
	DecodedSigningPayload,
	DecodedUnsignedTx,
	OptionsWithMeta,
	UnsignedTransaction,
} from '../../types';
import { decodeSignedTx } from './decodeSignedTx';
import { decodeSigningPayload } from './decodeSigningPayload';
import { decodeUnsignedTx } from './decodeUnsignedTx';

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 * All integers are serialized to a base-10 string.
 *
 * @param unsignedTx - The data to parse, as an unsigned tx.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decode(
	unsignedTx: UnsignedTransaction,
	options: OptionsWithMeta
): DecodedUnsignedTx;

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 * All integers are serialized to a base-10 string.
 *
 * @param signedTx - The data to parse, as a signed tx hex string.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decode(
	signedTx: string,
	options: OptionsWithMeta
): DecodedSignedTx;

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 * All integers are serialized to a base-10 string.
 *
 * @param signingPayload - The data to parse, as a signing payload hex string.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decode(
	signingPayload: string,
	options: OptionsWithMeta
): DecodedSigningPayload;

export function decode(
	data: string | UnsignedTransaction,
	options: OptionsWithMeta
): DecodedSignedTx | DecodedUnsignedTx | DecodedSigningPayload {
	if (typeof data === 'string') {
		let decodedInfo: DecodedSigningPayload | DecodedSignedTx;
		try {
			decodedInfo = decodeSigningPayload(data, options);
		} catch {
			decodedInfo = decodeSignedTx(data, options);
		}
		return decodedInfo;
	}

	return decodeUnsignedTx(data, options);
}
