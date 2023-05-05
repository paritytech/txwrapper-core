import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import {
	knownChainProperties,
	KUSAMA_TEST_OPTIONS,
} from '@substrate/txwrapper-dev';

import { getRegistryBase } from './getRegistryBase';

describe('getRegistryBase', () => {
	it('Should decrease the registries metadata size when asCallsOnlyArg is true', () => {
		const registry = new TypeRegistry();

		const completeRegistry = getRegistryBase({
			chainProperties: knownChainProperties['polkadot'],
			specTypes: getSpecTypes(registry, 'Polkadot', 'polkadot', 9122),
			metadataRpc: KUSAMA_TEST_OPTIONS.metadataRpc,
		});

		const callsOnlyRegistry = getRegistryBase({
			chainProperties: knownChainProperties['polkadot'],
			specTypes: getSpecTypes(registry, 'Polkadot', 'polkadot', 9122),
			metadataRpc: KUSAMA_TEST_OPTIONS.metadataRpc,
			asCallsOnlyArg: true,
		});

		expect(
			Buffer.from(completeRegistry.metadata.toHex(), 'utf-8').byteLength
		).toBeGreaterThan(
			Buffer.from(callsOnlyRegistry.metadata.toHex(), 'utf-8').byteLength
		);
	});
});
