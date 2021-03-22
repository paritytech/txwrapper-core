import { getRegistry } from '../index';
import metadataRpc from './westendMetadataRpc50';

export const WESTEND_50_TEST_OPTIONS = {
	metadataRpc,
	registry: getRegistry({
		specName: 'westend',
		chainName: 'Westend',
		specVersion: 50,
		metadataRpc,
	}),
};

/**
 * Centralized source for all arguments used in specs for methods.
 */
export const TEST_METHOD_ARGS = {
	crowdloan: {
		contribute: {
			value: '90071992547409910',
			index: 12,
			signature: {
				Sr25519: '0xFFFFFFFFFFFFFFFF',
			},
		},
		withdraw: {
			index: 12,
			who: 'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P', // seed "//Charlie"
		},
	},
};
