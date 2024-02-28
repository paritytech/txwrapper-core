import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import memoizee from 'memoizee';

import { mockGetRegistryBase } from './mockGetRegistry';

/**
 * Get the Westend type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryWestend(
	specVersion: number,
	metadataRpc: `0x${string}`,
): TypeRegistry {
	return mockGetRegistryBase({
		chainProperties: {
			ss58Format: 42,
			tokenDecimals: 12,
			tokenSymbol: 'WND',
		},
		specTypes: getSpecTypes(
			new TypeRegistry(),
			'Westend',
			'westend',
			specVersion,
		),
		metadataRpc,
	});
}

export const memoizedWestendGetRegistry = memoizee(getRegistryWestend);
