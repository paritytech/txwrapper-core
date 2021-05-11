"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSigningPayload = void 0;
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
 * // N.B. signing payloads > 256 bytes get hashed with blake2_256
 * // ref: https://substrate.dev/rustdocs/v3.0.0/src/sp_runtime/generic/unchecked_extrinsic.rs.html#201-209
 * extrinsicPayloadU8a = extrinsicPayload.toU8a({ method: true })
 * const actualPayload = extrinsicPayloadU8a.length > 256
 *   ? registry.hash(extrinsicPayloadU8a)
 *   : extrinsicPayloadU8a;
 *
 * // You can now sign `actualPayload` with you private key.
 * // Note: you can can use `u8ToHex` from @polkadot/util to convert `actualPayload`
 * // to a hex string.
 *
 * // Alternatively, call the `.sign()` method directly on the
 * `ExtrinsicPayload` class.
 * const { signature } = extrinsicPayload.sign(myKeyPair);
 * ```
 */
function createSigningPayload(unsigned, options) {
    const { registry } = options;
    return registry
        .createType('ExtrinsicPayload', unsigned, {
        version: unsigned.version,
    })
        .toHex();
}
exports.createSigningPayload = createSigningPayload;
//# sourceMappingURL=createSigningPayload.js.map