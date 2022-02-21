// Various metadata related constants and registry creator used for testing and
// and also for consumption.

import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';

import { getRegistryBase } from '../core';

/**
 * Get the Polkadot type registry for a given spec version for testing purposes
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryKusama(
	specVersion: number,
	metadataRpc: `0x${string}`
): TypeRegistry {
	return getRegistryBase({
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
