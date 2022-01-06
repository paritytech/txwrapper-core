import { u8aToHex } from '@polkadot/util';

import { Options, UnsignedTransaction } from '../../types';

/**
 * Create a signing payload with the method prefix removed.
 * If the length of the payload is about 256, then it will be hashed using
 * blake2_256.
 *
 * @param unsigned
 * @param options
 * @returns
 */
export function createSigningPayloadToU8aToHex(
	unsigned: UnsignedTransaction,
	options: Options
): `0x${string}` {
	const { registry } = options;
	const extrinsicPayload = registry.createType('ExtrinsicPayload', unsigned, {
		version: unsigned.version,
	});

	/**
	 * Makes sure that the method bytes in the payload doesnt have a length prefix
	 * included.
	 */
	const extrinsicPayloadU8a = extrinsicPayload.toU8a({ method: true });

	const hashedPayload =
		extrinsicPayloadU8a.length > 256
			? registry.hash(extrinsicPayloadU8a)
			: extrinsicPayloadU8a;

	return u8aToHex(hashedPayload);
}
