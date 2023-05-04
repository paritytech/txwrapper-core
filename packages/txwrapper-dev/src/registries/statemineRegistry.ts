import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import memoizee from 'memoizee';

import { mockGetRegistryBase } from './mockGetRegistry';

/**
 * Get the Kusama type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryStatemine(
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
			'Statemine',
			'statemine',
			specVersion
		),
		metadataRpc,
	});
}

export const memoizedStatemineGetRegistry = memoizee(getRegistryStatemine);
