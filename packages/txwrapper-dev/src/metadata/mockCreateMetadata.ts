import { Metadata } from '@polkadot/types';
import { TypeRegistry } from '@polkadot/types';
import { MetadataVersioned } from '@polkadot/types/metadata/MetadataVersioned';
import memoizee from 'memoizee';

/**
 * From a metadata hex string (for example returned by RPC), create a Metadata
 * class instance. Metadata decoding is expensive, so this function is
 * memoized.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 * @param asCallsOnlyArg - Option to decreases the metadata to calls only
 */
export function mockCreateMetadataUnmemoized(
	registry: TypeRegistry,
	metadataRpc: `0x${string}`,
	asCallsOnlyArg = false,
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
 * @param asCallsOnlyArg - Option to decreases the metadata to calls only
 */
export const mockCreateMetadata = memoizee(mockCreateMetadataUnmemoized, {
	length: 3,
});
