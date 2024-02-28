import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import memoizee from 'memoizee';

import { mockGetRegistryBase } from './mockGetRegistry';

/**
 * Get the Polkadot type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryPolkadot(
	specVersion: number,
	metadataRpc: `0x${string}`,
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
			specVersion,
		),
		metadataRpc,
	});
}

export const memoizedPolkadotGetRegistry = memoizee(getRegistryPolkadot);
