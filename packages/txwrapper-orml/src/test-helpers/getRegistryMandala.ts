import { typesBundleForPolkadot } from '@acala-network/type-definitions';
import { TypeRegistry } from '@polkadot/types';
import { OverrideBundleType } from '@polkadot/types/types';
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
	metadataRpc: `0x${string}`
): TypeRegistry {
	const registry = new TypeRegistry();
	registry.setKnownTypes({
		typesBundle: typesBundleForPolkadot as unknown as OverrideBundleType,
	});

	return getRegistryBase({
		chainProperties: {
			tokenDecimals: 18,
			tokenSymbol: 'ACA',
			// substrate prefix (42), is the common prefix for the test chains
			ss58Format: PolkadotSS58Format.substrate,
		},
		specTypes: getSpecTypes(registry, 'Mandala', 'mandala', specVersion),
		metadataRpc,
		userExtensions: { SetEvmOrigin: { payload: {}, extrinsic: {} } },
	});
}
