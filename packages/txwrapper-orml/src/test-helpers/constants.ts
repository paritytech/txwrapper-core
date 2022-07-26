import { getRegistryInterlay } from './getRegistryInterlay';
import { getRegistryMandala } from './getRegistryMandala';
import { interlay4Metadata } from './interlay4Metadata';
// Static metadata from mandala, an acala test network that uses ORML pallets
import { mandala722MetadataRpc } from './mandala2082MetadataRpc';

/**
 * Test options for the mandala v602 runtime.
 */
export const MANDALA_2082_TEST_OPTIONS = {
	metadataRpc: mandala722MetadataRpc,
	registry: getRegistryMandala(2082, mandala722MetadataRpc),
	userExtensions: { SetEvmOrigin: { payload: {}, extrinsic: {} } },
};

export const INTERLAY_4_TEST_OPTIONS = {
	metadataRpc: interlay4Metadata,
	registry: getRegistryInterlay(4, interlay4Metadata),
};

/**
 * Centralized source for all arguments used in specs for methods.
 */
export const TEST_METHOD_ARGS = {
	currencies: {
		transfer: {
			amount: 12,
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			currencyId: { Token: 'ACA' },
		},
		transferNativeCurrency: {
			amount: 12,
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
		},
	},
	tokens: {
		transfer: {
			amount: 12,
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			currencyId: { Token: 'INTR' },
		},
		transferAll: {
			dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
			currencyId: { Token: 'INTR' },
			keepAlive: true,
		},
	},
};
