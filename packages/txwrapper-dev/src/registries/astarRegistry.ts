import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import memoizee from 'memoizee';

import { mockGetRegistryBase } from './mockGetRegistry';

/**
 * Get the Astar type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryAstar(
	specVersion: number,
	metadataRpc: `0x${string}`
): TypeRegistry {
	return mockGetRegistryBase({
		chainProperties: {
			ss58Format: 5,
			tokenDecimals: 18,
			tokenSymbol: 'ASTR',
		},
		specTypes: getSpecTypes(new TypeRegistry(), 'astar', 'astar', specVersion),
		metadataRpc,
	});
}

export const memoizedAstarGetRegistry = memoizee(getRegistryAstar);
