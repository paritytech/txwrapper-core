import {
	getRegistryBase,
	GetRegistryOptsCore,
	getSpecTypes,
	PolkadotSS58Format,
	TypeRegistry,
} from '@substrate/txwrapper-core';
import { methods as substrateMethods } from '@substrate/txwrapper-substrate';

// Export methods of pallets included in the Polkadot/ Kusama/ Westend runtimes.
// Note: in the future this may also include methods defined within this package
// that do not exist in Substrate.
export const methods = {
	balances: substrateMethods.balances,
	utility: substrateMethods.utility,
	proxy: substrateMethods.proxy,
};

// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';

/**
 * `ChainProperties` for networks that txwrapper-polkadot supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
const KNOWN_CHAIN_PROPERTIES = {
	kusama: {
		ss58Format: PolkadotSS58Format.kusama,
		tokenDecimals: 12,
		tokenSymbol: 'KSM',
	},
	polkadot: {
		ss58Format: PolkadotSS58Format.polkadot,
		tokenDecimals: 10,
		tokenSymbol: 'DOT',
	},
	westend: {
		ss58Format: PolkadotSS58Format.westend,
		tokenDecimals: 12,
		tokenSymbol: 'WND',
	},
};

// We override the `specName` property of `GetRegistryOptsCore` in order to get narrower type specificity,
// hopefully creating a better experience for users.
/**
 * Options for txwrapper-polkadot's `getRegistry` function.
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
	// The default type registry has polkadot types
	const registry = new TypeRegistry();

	return getRegistryBase({
		chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specName],
		specTypes: getSpecTypes(registry, chainName, specName, specVersion),
		metadataRpc,
	});
}
