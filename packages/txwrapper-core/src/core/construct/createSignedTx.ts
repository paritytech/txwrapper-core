import { OptionsWithMeta, UnsignedTransaction } from '../../types';
import { createMetadata } from '..';

/**
 * Serialize a signed transaction in a format that can be submitted over the
 * Node RPC Interface from the signing payload and signature produced by the
 * remote signer.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param signature - Signature of the signing payload produced by the remote
 * signer. A signed ExtrinsicPayload returns a signature with the type `0x${string}` via polkadot-js.
 * @param options - Registry and metadata used for constructing the method.
 */
export function createSignedTx(
	unsigned: UnsignedTransaction,
	signature: `0x${string}`,
	options: OptionsWithMeta
): string {
	const {
		metadataRpc,
		registry,
		asCallsOnlyArg,
		signedExtensions,
		userExtensions,
	} = options;
	const metadata = createMetadata(registry, metadataRpc, asCallsOnlyArg);

	registry.setMetadata(metadata, signedExtensions, userExtensions);

	const extrinsic = registry.createType(
		'Extrinsic',
		{ method: unsigned.method },
		{ version: unsigned.version }
	);

	extrinsic.addSignature(unsigned.address, signature, unsigned);

	return extrinsic.toHex();
}
