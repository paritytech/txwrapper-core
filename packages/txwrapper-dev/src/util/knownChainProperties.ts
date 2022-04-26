import { allNetworks as substrateSS58Registry } from '@polkadot/networks';

import { ChainProperties } from '../mock-types';

/**
 * This similar method to txwrapper-registry is used here to
 * test getRegistryBase.
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
    {} as Record<string, ChainProperties>
);
