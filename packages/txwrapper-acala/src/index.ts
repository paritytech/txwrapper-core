import { typesBundleForPolkadot } from '@acala-network/type-definitions';
import { OverrideBundleType } from '@polkadot/types/types';
import {
	getRegistryBase,
	GetRegistryOptsCore,
	getSpecTypes,
	TypeRegistry,
} from '@substrate/txwrapper-core';
import { methods as ORMLMethods } from '@substrate/txwrapper-orml';

// Export methods of pallets included in the Acala / Mandala runtimes.
export const methods = {
	currencies: ORMLMethods.currencies,
};

export * from './TokenSymbol';

// Re-export all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';

/**
 * `ChainProperties` for networks that txwrapper-acala supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
const KNOWN_CHAIN_PROPERTIES = {
	acala: {
		ss58Format: 10,
		tokenDecimals: 18,
		tokenSymbol: 'ACA',
	},
	mandala: {
		ss58Format: 42,
		tokenDecimals: 18,
		tokenSymbol: 'ACA',
	},
};

/**
 * Options for txwrapper-acala's `getRegistry` function.
 */
export interface GetRegistryOpts extends GetRegistryOptsCore {
	specName: keyof typeof KNOWN_CHAIN_PROPERTIES;
}

/**
 * Get a type registry for networks that txwrapper-acala supports.
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
		typesBundle: (typesBundleForPolkadot as unknown) as OverrideBundleType,
	});

	return getRegistryBase({
		chainProperties: properties,
		specTypes: getSpecTypes(registry, chainName, specName, specVersion),
		metadataRpc,
	});
}
