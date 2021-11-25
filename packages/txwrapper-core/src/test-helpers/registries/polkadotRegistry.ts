import { polkadotV9122MetadataHex } from '../metadata/polkadotV9122MetadataHex';
import { getRegistryPolkadot } from '../getRegistryPolkadot';

/**
 * Polkadot v9122 TypeRegistry
 */
export const polkadotRegistryV9122 = getRegistryPolkadot(
	9122,
	polkadotV9122MetadataHex
);
