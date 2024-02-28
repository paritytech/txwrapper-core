/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { allNetworks as substrateSS58Registry } from '@polkadot/networks';
import { TypeRegistry } from '@polkadot/types';
import { OverrideBundleType } from '@polkadot/types/types';
import { getSpecTypes } from '@polkadot/types-known';
import {
	ChainProperties,
	getRegistryBase,
	GetRegistryOptsCore,
	isBrowser,
} from '@substrate/txwrapper-core';
import fs from 'fs';

/**
 * Known chain properties based on the substrate ss58 registry.
 * Chain properties are derived from the substrate ss58 registry:
 * https://raw.githubusercontent.com/paritytech/substrate/master/ss58-registry.json
 *
 * Alternatively, chain properties can be dynamically fetched through the
 * `system_properties` RPC call.
 */
export const knownChainProperties = substrateSS58Registry.reduce(
	(acc, { decimals, network, symbols, prefix }) => {
		if (network !== null) {
			acc[network] = {
				tokenDecimals: decimals,
				tokenSymbol: symbols,
				ss58Format: prefix,
			};
		}

		return acc;
	},
	{} as Record<string, ChainProperties>,
);

// We override the`specName` property in order to get narrower type specificity. We add a doc
// comment to`properties` with relevant info. The goal is just to improve UX.
/**
 * Options for `getRegistry`.
 */
export interface GetRegistryOpts extends GetRegistryOptsCore {
	specName: keyof typeof knownChainProperties;
	/**
	 * Optionally specify the chain properties if they are not included in
	 * https://raw.githubusercontent.com/paritytech/substrate/master/ss58-registry.json
	 * (and thus not included in `knownChainProperties`)
	 */
	properties?: ChainProperties;
}

function parseTypesBundle(
	path: string | undefined,
): OverrideBundleType | undefined {
	if (!path) return undefined;

	let parsedJson: OverrideBundleType | undefined;
	try {
		const rawData = fs.readFileSync(path, { encoding: 'utf-8' });
		parsedJson = JSON.parse(rawData);
	} catch (e) {
		console.error(
			`Invalid file path or not able to parse file to JSON: ${e as string}`,
		);
	}

	return parsedJson;
}

const envTypesBundle: OverrideBundleType | undefined = parseTypesBundle(
	!isBrowser && typeof process?.env?.TX_TYPES_BUNDLE !== 'undefined'
		? process.env.TX_TYPES_BUNDLE
		: undefined,
);

/**
 * Create a registry with `knownTypes` via env variables.
 * ie: STX_TYPES_BUNDLE; STX_TYPES_CHAIN
 */
export function createRegistry(typesBundle?: OverrideBundleType): TypeRegistry {
	const registry = new TypeRegistry();
	registry.setKnownTypes({
		typesBundle: typesBundle || envTypesBundle,
	});

	return registry;
}

/**
 * Create a registry based on specName, chainName, specVersion and metadataRPC. This should work for
 * Polkadot, Kusama, Westend and any chain which has up-to-date types in @polkadot/apps-config.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */
export function getRegistry({
	specName,
	chainName,
	specVersion,
	metadataRpc,
	properties,
	asCallsOnlyArg,
	typesBundle,
	additionalTypes,
}: GetRegistryOpts): TypeRegistry {
	const registry = createRegistry();

	return getRegistryBase({
		chainProperties: properties || knownChainProperties[specName],
		// `getSpecTypes` is used to extract the chain specific types from the registries `knownTypes`
		specTypes: getSpecTypes(registry, chainName, specName, specVersion),
		metadataRpc,
		asCallsOnlyArg,
		typesBundle,
		additionalTypes,
	});
}
