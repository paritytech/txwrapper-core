import { core } from '../'
import { OptionsWithMeta, UnsignedTransaction } from '../../types/'

/**
 * Serialize a signed transaction in a format that can be submitted over the
 * Node RPC Interface from the signing payload and signature produced by the
 * remote signer.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param signature - Signature of the signing payload produced by the remote
 * signer.
 * @param options - Registry and metadata used for constructing the method.
 */
export function createSignedTx(
  unsigned: UnsignedTransaction,
  signature: string,
  options: OptionsWithMeta
): string {
	const { metadataRpc, registry } = options;
	registry.setMetadata(core.metadata.createMetadata(registry, metadataRpc));

  const extrinsic = registry.createType(
    'Extrinsic',
    { method: unsigned.method },
    { version: unsigned.version }
  );

  extrinsic.addSignature(unsigned.address, signature, unsigned);

  return extrinsic.toHex();
}
