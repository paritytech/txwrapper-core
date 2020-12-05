import { typesBundle, typesChain, typesSpec } from '@polkadot/apps-config/api';
import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import { ChainProperties, getRegistryBase } from '@substrate/txwrapper-core';

import { AcalaSS58Format, AcalaTokenDecimal, AcalaTokenSymbol } from './acala';
import {
	PolkadotSS58Format,
	PolkadotTokenDecimal,
	PolkadotTokenSymbol,
} from './polkadot';

export * from './acala';
export * from './polkadot';

/**
 * Hardcode some chain properties of known chains. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty
 * safe to hardcode them.
 *
 * @ignore
 */
// TODO replace with @polkadot/network package
export const chainProperties: Record<string, ChainProperties> = {
	kusama: {
		ss58Format: PolkadotSS58Format.kusama,
		tokenDecimals: PolkadotTokenDecimal.kusama,
		tokenSymbol: PolkadotTokenSymbol.kusama,
	},
	polkadot: {
		ss58Format: PolkadotSS58Format.polkadot,
		tokenDecimals: PolkadotTokenDecimal.polkadot,
		tokenSymbol: PolkadotTokenSymbol.polkadot,
	},
	westend: {
		ss58Format: PolkadotSS58Format.westend,
		tokenDecimals: PolkadotTokenDecimal.westend,
		tokenSymbol: PolkadotTokenSymbol.westend,
	},
	acala: {
		ss58Format: AcalaSS58Format.acala,
		tokenDecimals: AcalaTokenDecimal.acala,
		tokenSymbol: AcalaTokenSymbol.acala,
	},
	mandala: {
		ss58Format: AcalaSS58Format.mandala,
		tokenDecimals: AcalaTokenDecimal.mandala,
		tokenSymbol: AcalaTokenSymbol.mandala,
	},
};

export interface GetRegistryOpts {
	specName: keyof typeof chainProperties; // TODO dynamically use polkadot networks package
	chainName: string;
	specVersion: number;
	metadataRpc: string;
}

function getAppsConfigRegistry(): TypeRegistry {
	const registry = new TypeRegistry();
	registry.setKnownTypes({
		typesBundle,
		typesChain,
		typesSpec,
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
}: GetRegistryOpts): TypeRegistry {
	// Polkadot, kusama, and westend have known types in the default polkadot-js registry. If we are
	// dealing with another network, use the apps-config types to fill the registry.
	const registry = ['polkadot', 'kusama', 'westend'].includes(specName)
		? new TypeRegistry()
		: getAppsConfigRegistry();

	return getRegistryBase({
		chainProperties: chainProperties[specName],
		specTypes: getSpecTypes(registry, chainName, specName, specVersion),
		metadataRpc,
	});
}
