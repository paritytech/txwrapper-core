import { getRegistryMandala } from './getRegistryMandala';
// Static metadata from mandala, an acala test network that uses ORML pallets
import { mandala602MetadataRpc as metadataRpc } from './mandala602MetadataRpc';

/**
 * Test options for the mandala v602 runtime.
 */
export const MANDALA_602_TEST_OPTIONS = {
	metadataRpc,
	registry: getRegistryMandala(602, metadataRpc),
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
};
