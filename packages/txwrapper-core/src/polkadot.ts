// Various metadata related constants and registry creator used for testing and
// and also for consumption.

import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';

import { getRegistry } from './core';
import { ChainProperties } from './types';

/**
 * Prefix for ss58-encoded addresses on Polkadot, Kusama, and Westend. Note:
 * 42, the Westend prefix, is also the default for Substrate-based chains.
 */
export enum PolkadotSS58Format {
	polkadot = 0,
	kusama = 2,
	westend = 42,
}

/**
 * Token symbols for Polkadot, Kusama, and Westend.
 */
enum PolkadotTokenSymbols {
	polkadot = 'DOT',
	kusama = 'KSM',
	westend = 'WND',
}

/**
 * Token decimal places for Polkadot, Kusama, and Westend.
 */
enum PolkadotTokenDecimals {
	polkadot = 10,
	kusama = 12,
	westend = 12,
}

/**
 * Hardcode some chain properties of known chains. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty
 * safe to hardcode them.
 *
 * @ignore
 */
export const polkadotChainProperties: Record<string, ChainProperties> = {
	Kusama: {
		ss58Format: PolkadotSS58Format.kusama,
		tokenDecimals: PolkadotTokenDecimals.kusama,
		tokenSymbol: PolkadotTokenSymbols.kusama,
	},
	Polkadot: {
		ss58Format: PolkadotSS58Format.polkadot,
		tokenDecimals: PolkadotTokenDecimals.polkadot,
		tokenSymbol: PolkadotTokenSymbols.polkadot,
	},
	Westend: {
		ss58Format: PolkadotSS58Format.westend,
		tokenDecimals: PolkadotTokenDecimals.westend,
		tokenSymbol: PolkadotTokenSymbols.westend,
	},
};

/**
 * Polkadot, Kusama, and Westened specNames.
 */
export enum PolkadotSpecName {
	kusama = 'kusama',
	westend = 'westend',
	polkadot = 'polkadot',
}

/**
 * Polkadot, Kusama, and Westened chainNames.
 */
export enum PolkadotChainName {
	Kusama = 'Kusama',
	Westend = 'Westend',
	Polkadot = 'Polkadot',
}

// Note: registry creators for Kusama and Westend can be found in txwrapper-polkadot.
// This registry creator is here for testing purposes
/**
 * Get the Polkadot type registry for a given spec version.
 *
 * @param specVersion
 * @param metadataRpc
 */
export function getRegistryPolkadot(
	specVersion: number,
	metadataRpc: string
): TypeRegistry {
	return getRegistry({
		chainProperties: polkadotChainProperties[PolkadotChainName.Polkadot],
		specTypes: getSpecTypes(
			new TypeRegistry(),
			PolkadotChainName.Polkadot,
			PolkadotSpecName.polkadot,
			specVersion
		),
		metadataRpc,
	});
}
