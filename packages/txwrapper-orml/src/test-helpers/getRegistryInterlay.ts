import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import { getRegistryBase } from '@substrate/txwrapper-core';

/**
 * Interlay registry creator for testing.
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryInterlay(
	specVersion: number,
	metadataRpc: `0x${string}`,
): TypeRegistry {
	const registry = new TypeRegistry();

	return getRegistryBase({
		chainProperties: {
			tokenDecimals: [10, 8, 10, 12, 8, 12],
			tokenSymbol: ['INTR', 'IBTC', 'DOT', 'KINT', 'KBTC', 'KSM'],
			ss58Format: 2032,
		},
		specTypes: getSpecTypes(
			registry,
			'Interlay',
			'interlay-parachain',
			specVersion,
		),
		metadataRpc,
	});
}
