import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import { getRegistry } from '@substrate/txwrapper-core';
import {
	PolkadotChainName,
	polkadotChainProperties,
	PolkdotSpecName,
} from '@substrate/txwrapper-core/src/polkadot';

// Re-export here for clear module organization
export { getRegistryPolkadot } from '@substrate/txwrapper-core/src/polkadot';

/**
 * Get the Kusama type registry for a given spec version.
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryKusama(
	specVersion: number,
	metadataRpc: string
): TypeRegistry {
	return getRegistry({
		chainProperties: polkadotChainProperties[PolkadotChainName.Kusama],
		specTypes: getSpecTypes(
			new TypeRegistry(),
			PolkadotChainName.Kusama,
			PolkdotSpecName.kusama,
			specVersion
		),
		metadataRpc,
	});
}

/**
 * Get the Westend type registry for a given spec version.
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryWestend(
	specVersion: number,
	metadataRpc: string
): TypeRegistry {
	return getRegistry({
		chainProperties: polkadotChainProperties[PolkadotChainName.Westend],
		specTypes: getSpecTypes(
			new TypeRegistry(),
			PolkadotChainName.Westend,
			PolkdotSpecName.westend,
			specVersion
		),
		metadataRpc,
	});
}
