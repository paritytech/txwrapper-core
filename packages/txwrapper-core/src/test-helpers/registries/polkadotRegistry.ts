import { getRegistryPolkadot } from '../getRegistryPolkadot';
import { polkadotV9122MetadataHex } from '../metadata/polkadotV9122MetadataHex';

/**
 * Polkadot v9122 TypeRegistry
 */
export const polkadotRegistryV9122 = getRegistryPolkadot(
	9122,
	polkadotV9122MetadataHex
);
