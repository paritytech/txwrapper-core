import { TypeRegistry } from '@polkadot/types';
import {
	decorateConstants,
	decorateExtrinsics,
} from '@polkadot/types/metadata/decorate';
import { Constants, Extrinsics } from '@polkadot/types/metadata/decorate/types';

import { createMetadata } from './createMetadata';

/**
 * From a metadata hex string (for example returned by RPC), create decorated
 * modules with their calls (transactions).
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
export function createDecoratedTx(
	registry: TypeRegistry,
	metadataRpc: string,
	asCallsOnly = false
): Extrinsics {
	const metadata = createMetadata(registry, metadataRpc, asCallsOnly);
	return decorateExtrinsics(registry, metadata.asLatest, metadata.version);
}

/**
 * From a metadata hex string (for example returned by RPC), create decorated
 * modules with their constants.
 *
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
export function createDecoratedConstants(
	registry: TypeRegistry,
	metadataRpc: string
): Constants {
	const metadata = createMetadata(registry, metadataRpc);
	return decorateConstants(registry, metadata.asLatest, metadata.version);
}
