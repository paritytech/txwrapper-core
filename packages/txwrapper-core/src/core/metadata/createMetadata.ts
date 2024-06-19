import { Metadata } from '@polkadot/types';
import { TypeRegistry } from '@polkadot/types';
import { MetadataVersioned } from '@polkadot/types/metadata/MetadataVersioned';
import memoizee from 'memoizee';

import { isBrowser } from '../util';
import { toSpecifiedCallsOnlyV14 } from './toSpecifiedCallsOnlyV14';

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
export function createMetadataUnmemoized(
	registry: TypeRegistry,
	metadataRpc: `0x${string}`,
	asCallsOnlyArg = false,
	asSpecifiedCallsOnlyV14?: string[],
): Metadata | MetadataVersioned {
	const metadata = new Metadata(registry, metadataRpc);

	if (asSpecifiedCallsOnlyV14 && asSpecifiedCallsOnlyV14.length > 0) {
		return new MetadataVersioned(registry, {
			magicNumber: metadata.magicNumber,
			metadata: registry.createTypeUnsafe('MetadataAll', [
				toSpecifiedCallsOnlyV14(
					registry,
					metadata.asV14,
					asSpecifiedCallsOnlyV14,
				),
				14,
			]),
		});
	}

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
export const createMetadata = memoizee(createMetadataUnmemoized, {
	length: 4,
	max:
		!isBrowser && typeof process !== 'undefined' && 
		typeof process.env?.TXWRAPPER_METADATA_CACHE_MAX !== 'undefined'
			? parseInt(process.env.TXWRAPPER_METADATA_CACHE_MAX)
			: undefined,
	maxAge:
		!isBrowser && typeof process !== 'undefined' && 
		typeof process.env?.TXWRAPPER_METADATA_CACHE_MAX_AGE !== 'undefined'
			? parseInt(process.env.TXWRAPPER_METADATA_CACHE_MAX_AGE)
			: undefined,
});
