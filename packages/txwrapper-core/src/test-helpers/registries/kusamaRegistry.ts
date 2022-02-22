import { getRegistryKusama } from '../getRegistryKusama';
import { kusamaV9160MetadataHex } from '../metadata/kusamaV9160MetadataHex';

/**
 * Polkadot v9122 TypeRegistry
 */
export const kusamaRegistryV9160 = getRegistryKusama(
	9160,
	kusamaV9160MetadataHex
);
