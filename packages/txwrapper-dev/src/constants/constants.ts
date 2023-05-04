import {
	polkadotV9122MetadataHex,
	polkadotV9340MetadataHex,
	polkadotV9350MetadataHex,
} from '../metadata/';
import { kusamaMetadataHex } from '../metadata/kusama';
import { kusamaV9160MetadataHex } from '../metadata/kusama/kusamaV9160MetadataHex';
import { kusamaV9320MetadataHex } from '../metadata/kusama/kusamaV9320MetadataHex';
import { statemineMetadataHex } from '../metadata/statemine';
import { metadataRpc } from '../metadata/static/staticV3-1-1';
import { metadataRpcV29 } from '../metadata/static/staticV4-3-1';
import {
	getRegistryKusama,
	getRegistryPolkadot,
	memoizedKusamaGetRegistry,
	memoizedStatemineGetRegistry,
} from '../registries';
export { metadataRpc };

export const KUSAMA_SPEC_VERSION = 9390;
const STATEMINT_SPEC_VERSION = 9360;

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

export const STATEMINT_TEST_BASE_TX_INFO = {
	address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
	blockHash:
		'0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
	blockNumber: 4302222,
	eraPeriod: 2400,
	genesisHash:
		'0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
	metadataRpc: kusamaMetadataHex,
	nonce: 2,
	specVersion: STATEMINT_SPEC_VERSION,
	tip: 0,
	transactionVersion: 6,
};

/**
 * Base tx information common to all tested transactions using runtime v29
 */
export const TEST_BASE_TX_INFO_V29 = {
	address: '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
	blockHash:
		'0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
	blockNumber: 4302222,
	eraPeriod: 2400,
	genesisHash:
		'0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
	metadataRpc: metadataRpcV29,
	nonce: 2,
	specVersion: 1019,
	tip: 0,
	transactionVersion: 6,
};

export const KUSAMA_TEST_OPTIONS = {
	metadataRpc: kusamaMetadataHex,
	registry: memoizedKusamaGetRegistry(KUSAMA_SPEC_VERSION, kusamaMetadataHex),
};

export const STATEMINE_TEST_OPTIONS = {
	metadataRpc: statemineMetadataHex,
	registry: memoizedStatemineGetRegistry(
		STATEMINT_SPEC_VERSION,
		statemineMetadataHex
	),
};

/**
 * Use this registry in tests.
 */
export const POLKADOT_25_TEST_OPTIONS = {
	metadataRpc,
	registry: getRegistryPolkadot(25, metadataRpc),
};

/**
 * Test options for runtime v29
 */
export const POLKADOT_29_TEST_OPTIONS = {
	metadataRpc: metadataRpcV29,
	registry: getRegistryPolkadot(29, metadataRpcV29),
};

/**
 * Test options for runtime v9122
 */
export const POLKADOT_9122_TEST_OPTIONS = {
	metadataRpc: polkadotV9122MetadataHex,
	registry: getRegistryPolkadot(9122, polkadotV9122MetadataHex),
};

/**
 * Test options for runtime v9122 with calls only metadata
 */
export const POLKADOT_9122_TEST_OPTIONS_CALLS_ONLY = {
	metadataRpc: polkadotV9122MetadataHex,
	registry: getRegistryPolkadot(9122, polkadotV9122MetadataHex),
	asCallsOnlyArg: true,
};

/**
 * Test options for runtime v9160 Kusama
 */
export const KUSAMA_9160_TEST_OPTIONS = {
	metadataRpc: kusamaV9160MetadataHex,
	registry: getRegistryKusama(9160, kusamaV9160MetadataHex),
};

/**
 * Test options for runtime v9320 Kusama
 */
export const KUSAMA_9320_TEST_OPTIONS = {
	metadataRpc: kusamaV9320MetadataHex,
	registry: getRegistryKusama(9320, kusamaV9320MetadataHex),
};

/**
 * Test options for runtime v9340 Polkadot
 */
export const POLKADOT_9340_TEST_OPTIONS = {
	metadataRpc: polkadotV9340MetadataHex,
	registry: getRegistryPolkadot(9340, polkadotV9340MetadataHex),
};

/**
 * Test options for runtime v9350 Polkadot
 */
export const POLKADOT_9350_TEST_OPTIONS = {
	metadataRpc: polkadotV9350MetadataHex,
	registry: getRegistryPolkadot(9350, polkadotV9350MetadataHex),
};

/**
 * Dummy arguments for all methods we're testing.
 */
export const TEST_METHOD_ARGS = {
	balances: {
		transfer: {
			dest: { id: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s' },
			value: 12,
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
	westend = 42,
	substrate = 42,
}
