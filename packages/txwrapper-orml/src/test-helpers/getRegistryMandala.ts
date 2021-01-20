import { types } from '@acala-network/type-definitions';
import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import { getRegistryBase, PolkadotSS58Format } from '@substrate/txwrapper-core';

/**
 * Mandala registry creator for testing.
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryMandala(
	specVersion: number,
	metadataRpc: string
): TypeRegistry {
	const registry = new TypeRegistry();
	registry.setKnownTypes({ types });

	return getRegistryBase({
		chainProperties: {
			tokenDecimals: 18,
			tokenSymbol: 'ACA',
			// substrate prefix, 42,is the common prefix for test chains
			ss58Format: PolkadotSS58Format.substrate,
		},
		specTypes: getSpecTypes(registry, 'Mandala', 'mandala', specVersion),
		metadataRpc,
	});
}
