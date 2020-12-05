import { getRegistryMandala } from './getRegistryMandala';
import { mandala602MetadataRpc as metadataRpc } from './mandala602MetadataRpc';

/**
 * Use this registry in tests.
 */
export const MANDALA_602_TEST_OPTIONS = {
	metadataRpc,
	registry: getRegistryMandala(602, metadataRpc),
};

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
