import { getRegistry } from '../index';
import { kusamaMetadataRpc9240 } from './kusamaMetadataRpc9240';
import { westendMetadataRpc9030 } from './westendMetadataRpc9030';

export const WESTEND_9030_TEST_OPTIONS = {
	metadataRpc: westendMetadataRpc9030,
	registry: getRegistry({
		specName: 'westend',
		chainName: 'Westend',
		specVersion: 9030,
		metadataRpc: westendMetadataRpc9030,
	}),
};

export const KUSAMA_9240_TEST_OPTIONS = {
	metadataRpc: kusamaMetadataRpc9240,
	registry: getRegistry({
		specName: 'kusama',
		chainName: 'Kusama',
		specVersion: 9240,
		metadataRpc: kusamaMetadataRpc9240,
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
				Sr25519:
					'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
			},
		},
		withdraw: {
			index: 12,
			who: 'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P', // seed "//Charlie"
		},
		addMemo: {
			index: 12,
			memo: '0xFFFFFFFFFFFFFFFF',
		},
	},
	xcmPallet: {
		V0: {
			dest: {
				V0: {
					X1: {
						Parachain: 2000,
					},
				},
			},
			beneficiary: {
				V0: {
					X1: {
						AccountId32: {
							id: '0x66168b7e94b956ce2ba83d4a0b8226c1de7a3526139f30690c08be5daa9ebe32',
							network: {
								Any: null,
							},
						},
					},
				},
			},
			assets: {
				V0: [
					{
						ConcreteFungible: {
							amount: '1000000000000',
							id: {
								Null: null,
							},
						},
					},
				],
			},
			feeAssetItem: 0,
		},
		V1: {
			dest: {
				V1: {
					interior: {
						X1: {
							Parachain: 2085,
						},
					},
					parents: 0,
				},
			},
			beneficiary: {
				V1: {
					interior: {
						X1: {
							AccountId32: {
								id: '0x54fabff72b8ec769b862e4e841837cd394b59910c8507ec6b753e7b89364cf60',
								network: {
									Any: null,
								},
							},
						},
					},
					parents: 0,
				},
			},
			assets: {
				V1: [
					{
						fun: {
							Fungible: '70000000000000',
						},
						id: {
							Concrete: {
								interior: {
									Here: null,
								},
								parents: 0,
							},
						},
					},
				],
			},
			feeAssetItem: 0,
		},
	},
};
