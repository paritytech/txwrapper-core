import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';

import {
	knownChainProperties,
	POLKADOT_9122_TEST_OPTIONS,
} from '../../test-helpers/';
import { getRegistryBase } from './getRegistryBase';

describe('getRegistryBase', () => {
	it('Should decrease the registries metadata size when asCallsOnlyArg is true', () => {
		const registry = new TypeRegistry();

		const completeRegistry = getRegistryBase({
			chainProperties: knownChainProperties['polkadot'],
			specTypes: getSpecTypes(registry, 'Polkadot', 'polkadot', 9122),
			metadataRpc: POLKADOT_9122_TEST_OPTIONS.metadataRpc,
		});

		const callsOnlyRegistry = getRegistryBase({
			chainProperties: knownChainProperties['polkadot'],
			specTypes: getSpecTypes(registry, 'Polkadot', 'polkadot', 9122),
			metadataRpc: POLKADOT_9122_TEST_OPTIONS.metadataRpc,
			asCallsOnlyArg: true,
		});

		expect(
			Buffer.from(JSON.stringify(completeRegistry.metadata.toHex()), 'utf-8')
				.byteLength
		).toBeGreaterThan(
			Buffer.from(JSON.stringify(callsOnlyRegistry.metadata.toHex()), 'utf-8')
				.byteLength
		);
	});
});
