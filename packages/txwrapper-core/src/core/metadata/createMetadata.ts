import { Metadata, TypeRegistry } from '@polkadot/types';
import memoizee from 'memoizee';

/**
 * From a metadata hex string (for example returned by RPC), create a Metadata
 * class instance. Metadata decoding is expensive, so this function is
 * memoized.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
function createMetadataUnmemoized(
	registry: TypeRegistry,
	metadataRpc: string
): Metadata {
	return new Metadata(registry, metadataRpc);
}

/**
 * @ignore
 */
export const createMetadata = memoizee(createMetadataUnmemoized, {
	length: 2,
});
