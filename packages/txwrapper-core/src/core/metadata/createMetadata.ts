import { Metadata } from '@polkadot/types';
import { MetadataVersioned } from '@polkadot/types/metadata/MetadataVersioned';
import { TypeRegistry } from '@polkadot/types';
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
	metadataRpc: string,
	asCallsOnlyArg: boolean = false,
): Metadata | MetadataVersioned {
	const metadata = new Metadata(registry, metadataRpc);
	return asCallsOnlyArg ? metadata.asCallsOnly : metadata;
}

/**
 * From a metadata hex string (for example returned by RPC), create a Metadata
 * class instance. Metadata decoding is expensive, so this function is
 * memoized.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
export const createMetadata = memoizee(createMetadataUnmemoized, {
	length: 2,
});
