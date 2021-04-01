import { OverrideBundleType } from '@polkadot/types/types';
import {
	getRegistryBase,
	GetRegistryOptsCore,
	getSpecTypes,
	TypeRegistry,
} from '@substrate/txwrapper-core';

import kiltDefinitions from './types';

// As a convenience to users we can provide them with hardcoded chain properties
// as these rarely change.
/**
 * `ChainProperties` for networks that txwrapper-foo supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
const KNOWN_CHAIN_PROPERTIES = {
	mashnet: {
		ss58Format: 38,
		tokenDecimals: 15,
		tokenSymbol: 'KILT',
	},
};

// We override the `specName` property of `GetRegistryOptsCore` in order to get narrower type specificity,
// hopefully creating a better experience for users.
/**
 * Options for the `getRegistry` function.
 */
export interface GetRegistryOpts extends GetRegistryOptsCore {
	specName: keyof typeof KNOWN_CHAIN_PROPERTIES;
}

/**
 * Get a type registry for networks that txwrapper-foo supports.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */
export function getRegistry({
	specName,
	chainName,
	specVersion,
	metadataRpc,
	properties,
}: GetRegistryOpts): TypeRegistry {
	const registry = new TypeRegistry();
	registry.setKnownTypes({
		// If your types are not packaged in the `OverrideBundleType` format, you can
		// specify types in any of the formats supported by `RegisteredTypes`:
		// https://github.com/polkadot-js/api/blob/4ff9b51af2c49294c676cc80abc6476565c70b11/packages/types/src/types/registry.ts#L59
		typesBundle: (kiltDefinitions as unknown) as OverrideBundleType,
	});

	return getRegistryBase({
		chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specName],
		specTypes: getSpecTypes(registry, chainName, specName, specVersion),
		metadataRpc,
	});
}
