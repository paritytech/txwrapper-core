import {
	constantsFromMeta,
	extrinsicsFromMeta,
} from '@polkadot/metadata/decorate';
import { Constants } from '@polkadot/metadata/decorate/types';
import { TypeRegistry } from '@polkadot/types';
import { ModulesWithCalls } from '@polkadot/types/types';

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
	metadataRpc: string
): ModulesWithCalls {
	return extrinsicsFromMeta(registry, createMetadata(registry, metadataRpc));
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
	return constantsFromMeta(registry, createMetadata(registry, metadataRpc));
}
