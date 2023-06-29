import { kusamaMetadataHex } from '../metadata/kusama';
import { polkadotMetadataHex } from '../metadata/polkadot';
import { statemineMetadataHex } from '../metadata/statemine';
import {
	memoizedKusamaGetRegistry,
	memoizedPolkadotGetRegistry,
	memoizedStatemineGetRegistry,
} from '../registries';

export const KUSAMA_SPEC_VERSION = 9430;
export const POLKADOT_SPEC_VERSION = 9430;
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

export const POLKADOT_TEST_OPTIONS = {
	metadataRpc: polkadotMetadataHex,
	registry: memoizedPolkadotGetRegistry(
		POLKADOT_SPEC_VERSION,
		polkadotMetadataHex
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

export const STATEMINE_TEST_OPTIONS = {
	metadataRpc: statemineMetadataHex,
	registry: memoizedStatemineGetRegistry(
		STATEMINT_SPEC_VERSION,
		statemineMetadataHex
	),
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
		transferAllowDeath: {
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
