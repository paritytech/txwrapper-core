import { Metadata } from '@polkadot/types';
import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';

import { polkadotV9122MetadataHex } from '../metadata/polkadotV9122MetadataHex';

/**
 * Create a type registry for Polkadot.
 * Useful for creating types in order to facilitate testing.
 */
function createPolkadotRegistry(
	specVersion: number,
	metadata: string
): TypeRegistry {
	const registry = new TypeRegistry();

	registry.register(
		getSpecTypes(registry, 'Polkadot', 'polkadot', specVersion)
	);
	registry.setChainProperties(
		registry.createType('ChainProperties', {
			ss58Format: 0,
			tokenDecimals: 12,
			tokenSymbol: 'DOT',
		})
	);

	registry.setMetadata(new Metadata(registry, metadata));

	return registry;
}

/**
 * Polkadot v9122 TypeRegistry
 */
export const polkadotRegistryV9122 = createPolkadotRegistry(
	9122,
	polkadotV9122MetadataHex
);
