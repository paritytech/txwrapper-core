import { Options, UnsignedTransaction } from '../../types';

/**
 * Create a signing payload with the method prefix removed.
 * If the length of the payload is above 256, then it will be hashed using
 * blake2_256.
 *
 * @param unsigned UnsignedTransaction to be passed in
 * @param options Registry used for constructing the payload.
 */
export function createSigningPayloadToU8a(
	unsigned: UnsignedTransaction,
	options: Options
): Uint8Array {
	const { registry } = options;
	const extrinsicPayload = registry.createType('ExtrinsicPayload', unsigned, {
		version: unsigned.version,
	});

	/**
	 * Makes sure that the method bytes in the payload doesnt have a length prefix
	 * included.
	 */
	const extrinsicPayloadU8a = extrinsicPayload.toU8a({ method: true });

	return extrinsicPayloadU8a.length > 256
		? registry.hash(extrinsicPayloadU8a)
		: extrinsicPayloadU8a;
}
