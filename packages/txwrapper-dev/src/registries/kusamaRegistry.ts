import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import memoizee from 'memoizee';

import { kusamaV9160MetadataHex } from '../metadata/kusama/kusamaV9160MetadataHex';
import { mockGetRegistryBase } from './mockGetRegistry';

/**
 * Get the Kusama type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryKusama(
	specVersion: number,
	metadataRpc: `0x${string}`
): TypeRegistry {
	return mockGetRegistryBase({
		chainProperties: {
			ss58Format: 2,
			tokenDecimals: 12,
			tokenSymbol: 'KSM',
		},
		specTypes: getSpecTypes(
			new TypeRegistry(),
			'Kusama',
			'kusama',
			specVersion
		),
		metadataRpc,
	});
}

export const memoizedGetRegistry = memoizee(getRegistryKusama);

/**
 * Kusama v9160 TypeRegistry
 */
export const kusamaRegistryV9160 = getRegistryKusama(
	9160,
	kusamaV9160MetadataHex
);
