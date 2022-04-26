import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import { polkadotV9122MetadataHex } from '../metadata/polkadot/polkadotV9122MetadataHex';

import { mockGetRegistryBase } from './mockGetRegistry';

/**
 * Get the Polkadot type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryPolkadot(
	specVersion: number,
	metadataRpc: `0x${string}`
): TypeRegistry {
	return mockGetRegistryBase({
		chainProperties: {
			ss58Format: 0,
			tokenDecimals: 10,
			tokenSymbol: 'DOT',
		},
		specTypes: getSpecTypes(
			new TypeRegistry(),
			'Polkadot',
			'polkadot',
			specVersion
		),
		metadataRpc,
	});
}

/**
 * Polkadot v9122 TypeRegistry
 */
export const polkadotRegistryV9122 = getRegistryPolkadot(
	9122,
	polkadotV9122MetadataHex
);
