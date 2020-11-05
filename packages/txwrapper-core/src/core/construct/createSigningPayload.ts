import { Options, UnsignedTransaction } from '../../types';

/**
 * Construct the signing payload from an unsigned transaction and export it to
 * a remote signer (this is often called "detached signing").
 *
 * **Important!** The registry needs to be passed into the `options` argument.
 * This registry needs to be updated with latest metadata, so before calling
 * this function, make sure to run `registry.setMetadata(metadata)` first.
 *
 * **Important!** The return value of this function is **NOT** the actual
 * payload to sign: the actual payload to sign includes `method` which should
 * not be length-prefixed. To construct the actual payload to sign, see the
 * example.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Registry and metadata used for constructing the method.
 *
 * @example
 * ```ts
 * // Serialized signing payload.
 * const signingPayload = createSigningPayload(unsigned, {
 *   metadataRpc,
 *   registry
 * });
 *
 * // Construct an `ExtrinsicPayload` class. Careful, the `version` here is the
 * // `TRANSACTION_VERSION` format version, and **NOT** the
 * // `transaction_version` field from the `state_getRuntimeVersion` RPC
 * // endpoint.
 * const extrinsicPayload = registry
 *   .createType('ExtrinsicPayload', unsigned, {
 *     version: unsigned.version,
 *  });
 *
 * // With the `ExtrinsicPayload` class, construct the actual payload to sign.
 * const actualPayload = extrinsicPayload.toU8a({ method: true });
 * // You can now sign `actualPayload` with you private key.
 *
 * // Alternatively, call the `.sign()` method directly on the
 * `ExtrinsicPayload` class.
 * const { signature } = extrinsicPayload.sign(myKeyPair);
 * ```
 */
export function createSigningPayload(
	unsigned: UnsignedTransaction,
	options: Options
): string {
	const { registry } = options;

	return registry
		.createType('ExtrinsicPayload', unsigned, {
			version: unsigned.version,
		})
		.toHex();
}
