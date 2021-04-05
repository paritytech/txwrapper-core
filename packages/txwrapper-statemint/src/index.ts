import {
	getRegistryBase,
	GetRegistryOptsCore,
	getSpecTypes,
	PolkadotSS58Format,
	TypeRegistry,
} from '@substrate/txwrapper-core';
import { methods as substrateMethods } from '@substrate/txwrapper-substrate';

export const methods = {
	assets: substrateMethods.assets,
	proxy: substrateMethods.proxy,
	multisig: substrateMethods.multisig,
};

// Re-export all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';

const KNOWN_CHAIN_PROPERTIES = {
	statemint: {
		ss58Format: PolkadotSS58Format.polkadot,
		tokenDecimals: 10,
		tokenSymbol: 'DOT',
	},
};

// We override the `specName` property of `GetRegistryOptsCore` in order to get narrower type specificity,
// hopefully creating a better experience for users.
/**
 * Options for txwrapper-statemints's `getRegistry` function.
 */
export interface GetRegistryOpts extends GetRegistryOptsCore {
	specName: keyof typeof KNOWN_CHAIN_PROPERTIES;
}

/**
 * Get a type registry for networks that txwrapper-statemint supports.
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
	// The default type registry has statemint types
	const registry = new TypeRegistry();

	return getRegistryBase({
		chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specName],
		specTypes: getSpecTypes(registry, chainName, specName, specVersion),
		metadataRpc,
	});
}
