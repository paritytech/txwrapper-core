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
			Buffer.from(completeRegistry.metadata.toHex(), 'utf-8').byteLength,
		).toBeGreaterThan(
			Buffer.from(callsOnlyRegistry.metadata.toHex(), 'utf-8').byteLength,
		);
	});

	it('Should accept a `typesBundle` and properly set the known types', () => {
		const registry = new TypeRegistry();
		const typesBundle = {
			spec: {
				polkadot: {
					types: [
						{
							minmax: [0, null],
							types: {
								TestingType: 'u32',
							},
						},
					],
				},
			},
		};

		const testRegistry = getRegistryBase({
			chainProperties: knownChainProperties['polkadot'],
			specTypes: getSpecTypes(registry, 'Polkadot', 'polkadot', 9122),
			metadataRpc: KUSAMA_TEST_OPTIONS.metadataRpc,
			typesBundle,
		});
		expect(
			testRegistry.knownTypes.typesBundle?.spec?.['polkadot'].types?.[0].types,
		).toEqual({
			TestingType: 'u32',
		});
	});

	it('Should inject types when `additionalTypes` is available', () => {
		const registry = new TypeRegistry();
		const testRegistry = getRegistryBase({
			chainProperties: knownChainProperties['polkadot'],
			specTypes: getSpecTypes(registry, 'Polkadot', 'polkadot', 9122),
			metadataRpc: KUSAMA_TEST_OPTIONS.metadataRpc,
			additionalTypes: { TestingType: 'u32' },
		});

		const testType = testRegistry.createType('TestingType', 10);
		expect(testType.toString()).toEqual('10');
	});
});
