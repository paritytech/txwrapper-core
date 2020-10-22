import Decorated from '@polkadot/metadata/Decorated';
import { TypeRegistry } from '@polkadot/types';

import { createMetadata } from './createMetadata';
/**
 * From a metadata hex string (for example returned by RPC), create a Decorated
 * object.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
export function createDecorated(
  registry: TypeRegistry,
  metadataRpc: string
): Decorated {
  return new Decorated(registry, createMetadata(registry, metadataRpc));
}
