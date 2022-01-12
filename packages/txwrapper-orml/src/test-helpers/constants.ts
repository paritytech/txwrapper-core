import { getRegistryMandala } from './getRegistryMandala';
// Static metadata from mandala, an acala test network that uses ORML pallets
import { mandala722MetadataRpc as metadataRpc } from './mandala722MetadataRpc';

/**
 * Test options for the mandala v602 runtime.
 */
export const MANDALA_722_TEST_OPTIONS = {
	metadataRpc,
	registry: getRegistryMandala(602, metadataRpc),
	userExtensions: { SetEvmOrigin: { payload: {}, extrinsic: {} } },
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
