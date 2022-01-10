import { TypeRegistry } from '@polkadot/types';
import { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
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
	metadataRpc: `0x${string}`;
	/**
	 * Used to reduce the metadata size by only having the calls
	 */
	asCallsOnlyArg?: boolean;
	/**
	 * Array of signedExtensions
	 */
	signedExtensions?: string[];
	/**
	 * User extensions used to inject into the type registry
	 */
	userExtensions?: ExtDef;
}

/**
 * Create a type registry given chainProperties, specTypes, and metadataRpc.
 */
export function getRegistryBase({
	chainProperties,
	specTypes,
	metadataRpc,
	asCallsOnlyArg,
	signedExtensions,
	userExtensions,
}: GetRegistryBaseArgs): TypeRegistry {
	const registry = new TypeRegistry();

	const generatedMetadata = createMetadata(
		registry,
		metadataRpc,
		asCallsOnlyArg
	);

	registry.register(specTypes);

	registry.setMetadata(generatedMetadata, signedExtensions, userExtensions);

	// Register the chain properties for this registry
	registry.setChainProperties(
		registry.createType('ChainProperties', chainProperties)
	);

	return registry;
}
