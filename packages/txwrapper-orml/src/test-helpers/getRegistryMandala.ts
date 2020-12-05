import { TypeRegistry } from '@polkadot/types';
import { PolkadotSS58Format } from '@substrate/txwrapper-core/test-helpers';
import {
	getRegistry,
	knownChainProperties,
} from '@substrate/txwrapper-registry';

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
	return getRegistry({
		specName: 'mandala',
		chainName: 'Mandala',
		specVersion,
		metadataRpc,
		properties: {
			...knownChainProperties.acala,
			ss58Format: PolkadotSS58Format.substrate,
		},
	});
}
