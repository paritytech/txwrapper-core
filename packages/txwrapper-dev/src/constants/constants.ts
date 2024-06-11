import { assetHubKusamaMetadataHex } from '../metadata/asset-hub-kusama';
import { assetHubPolkadotMetadataHex } from '../metadata/asset-hub-polkadot';
import { astarMetadataHex } from '../metadata/astar';
import { kusamaMetadataHex } from '../metadata/kusama';
import { polkadotMetadataHex } from '../metadata/polkadot';
import { westendMetadataHex } from '../metadata/westend';
import {
	memoizedAssetHubKusamaGetRegistry,
	memoizedAssetHubPolkadotGetRegistry,
	memoizedAstarGetRegistry,
	memoizedKusamaGetRegistry,
	memoizedPolkadotGetRegistry,
	memoizedWestendGetRegistry,
} from '../registries';

export const KUSAMA_SPEC_VERSION = 102005;
export const POLKADOT_SPEC_VERSION = 9430;
export const ASSET_HUB_KUSAMA_SPEC_VERSION = 1001002;
export const ASSET_HUB_POLKADOT_SPEC_VERSION = 1001002;
export const WESTEND_SPEC_VERSION = 9430;
export const ASTAR_SPEC_VERSION = 72;

/**
 * Base tx information common to all tested transactions
 */
export const TEST_BASE_TX_INFO = {
	address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
	blockHash:
		'0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
	blockNumber: 4302222,
	eraPeriod: 2400,
	genesisHash:
		'0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
	metadataRpc: kusamaMetadataHex,
	nonce: 2,
	specVersion: KUSAMA_SPEC_VERSION,
	tip: 0,
	transactionVersion: 6,
};

export const ASSET_HUB_POLKADOT_TEST_BASE_TX_INFO = {
	address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
	blockHash:
		'0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
	blockNumber: 4302222,
	eraPeriod: 2400,
	genesisHash:
		'0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
	metadataRpc: polkadotMetadataHex,
	nonce: 2,
	specVersion: ASSET_HUB_POLKADOT_SPEC_VERSION,
	tip: 0,
	transactionVersion: 6,
};

export const ASSET_HUB_KUSAMA_TEST_BASE_TX_INFO = {
	address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
	blockHash:
		'0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
	blockNumber: 4302222,
	eraPeriod: 2400,
	genesisHash:
		'0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
	metadataRpc: assetHubKusamaMetadataHex,
	nonce: 2,
	specVersion: ASSET_HUB_KUSAMA_SPEC_VERSION,
	tip: 0,
	transactionVersion: 6,
};

export const POLKADOT_TEST_BASE_TX_INFO = {
	address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
	blockHash:
		'0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
	blockNumber: 4302222,
	eraPeriod: 2400,
	genesisHash:
		'0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
	metadataRpc: polkadotMetadataHex,
	nonce: 2,
	specVersion: POLKADOT_SPEC_VERSION,
	tip: 0,
	transactionVersion: 6,
};

export const WESTEND_TEST_BASE_TX_INFO = {
	address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
	blockHash:
		'0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
	blockNumber: 4302222,
	eraPeriod: 2400,
	genesisHash:
		'0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
	metadataRpc: westendMetadataHex,
	nonce: 2,
	specVersion: WESTEND_SPEC_VERSION,
	tip: 0,
	transactionVersion: 6,
};

export const ASTAR_TEST_BASE_TX_INFO = {
	address: 'XYJkwdMbojBtNzngQxLHEdciMDE5baLihb5RWTL3QHGfnwy',
	blockHash:
		'0x6c8453305b978e867b2ccacea94e01a4ea49dfd6eb0965b6c0ccf36b295e16b5',
	blockNumber: 5034669,
	eraPeriod: 2400,
	genesisHash:
		'0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6',
	metadataRpc: astarMetadataHex,
	nonce: 2,
	specVersion: ASTAR_SPEC_VERSION,
	tip: '50000000000000000', // 0.05 ASTR
	transactionVersion: 2,
};

export const POLKADOT_TEST_OPTIONS = {
	metadataRpc: polkadotMetadataHex,
	registry: memoizedPolkadotGetRegistry(
		POLKADOT_SPEC_VERSION,
		polkadotMetadataHex,
	),
};

export const KUSAMA_TEST_OPTIONS = {
	metadataRpc: kusamaMetadataHex,
	registry: memoizedKusamaGetRegistry(KUSAMA_SPEC_VERSION, kusamaMetadataHex),
};

export const KUSAMA_TEST_OPTIONS_CALLS_ONLY = {
	metadataRpc: kusamaMetadataHex,
	registry: memoizedKusamaGetRegistry(KUSAMA_SPEC_VERSION, kusamaMetadataHex),
	asCallsOnlyArg: true,
};

export const ASSET_HUB_KUSAMA_TEST_OPTIONS = {
	metadataRpc: assetHubKusamaMetadataHex,
	registry: memoizedAssetHubKusamaGetRegistry(
		ASSET_HUB_KUSAMA_SPEC_VERSION,
		assetHubKusamaMetadataHex,
	),
};

export const ASSET_HUB_POLKADOT_TEST_OPTIONS = {
	metadataRpc: assetHubPolkadotMetadataHex,
	registry: memoizedAssetHubPolkadotGetRegistry(
		ASSET_HUB_POLKADOT_SPEC_VERSION,
		assetHubPolkadotMetadataHex,
	),
};

export const WESTEND_TEST_OPTIONS = {
	metadataRpc: westendMetadataHex,
	registry: memoizedWestendGetRegistry(
		WESTEND_SPEC_VERSION,
		westendMetadataHex,
	),
};
export const ASTAR_TEST_OPTIONS = {
	metadataRpc: astarMetadataHex,
	registry: memoizedAstarGetRegistry(ASTAR_SPEC_VERSION, astarMetadataHex),
};
/**
 *
 * Dummy arguments for all methods we're testing.
 */
export const TEST_METHOD_ARGS = {
	balances: {
		transfer: {
			dest: { id: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s' },
			value: 12,
		},
		transferAllowDeath: {
			dest: { id: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s' },
			value: 12,
		},
		transferKeepAlive: {
			dest: { id: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s' },
			value: 12,
		},
	},
};

export const ASTAR_TEST_METHOD_ARGS = {
	balances: {
		transfer: {
			dest: { id: 'XYJkwdMbojBtNzngQxLHEdciMDE5baLihb5RWTL3QHGfnwy' },
			value: 12,
			tip: 50000000000000000,
		},
		transferAllowDeath: {
			dest: { id: 'XYJkwdMbojBtNzngQxLHEdciMDE5baLihb5RWTL3QHGfnwy' },
			value: 12,
			tip: 50000000000000000,
		},
	},
};

/**
 * Prefix for ss58-encoded addresses on Polkadot, Kusama, and Westend. Note:
 * 42, the Westend prefix, is also the default for Substrate-based chains.
 */
export enum PolkadotSS58Format {
	polkadot = 0,
	kusama = 2,
	substrate = 42,
	westend = substrate,
	astar = 5,
}
