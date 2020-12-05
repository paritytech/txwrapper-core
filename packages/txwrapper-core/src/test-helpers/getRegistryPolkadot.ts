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
export function getRegistryPolkadot(
	specVersion: number,
	metadataRpc: string
): TypeRegistry {
	return getRegistryBase({
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
