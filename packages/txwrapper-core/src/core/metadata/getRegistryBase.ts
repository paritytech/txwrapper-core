import { TypeRegistry } from '@polkadot/types';
import { AnyJson, RegistryTypes } from '@polkadot/types/types';

import { ChainProperties } from '../../types';
import { createMetadata } from './createMetadata';

export interface GetRegistryBaseArgs {
	/**
	 * Chain properties, normally returned by the `system_properties` call.
	 */
	chainProperties: ChainProperties | AnyJson;
	/**
	 * Chain specific type definitions to registry.
	 */
	specTypes: RegistryTypes;
	/**
	 * Used to set the correct metadata for the registry
	 */
	metadataRpc: string;
}

/**
 * Create a type registry given chainProperties, specTypes, and metadataRpc.
 */
export function getRegistryBase({
	chainProperties,
	specTypes,
	metadataRpc,
}: GetRegistryBaseArgs): TypeRegistry {
	const registry = new TypeRegistry();

	const metadata = createMetadata(registry, metadataRpc);

	registry.register(specTypes);

	registry.setMetadata(metadata);

	// Register the chain properties for this registry
	registry.setChainProperties(
		registry.createType('ChainProperties', chainProperties)
	);

	return registry;
}
