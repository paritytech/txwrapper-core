import metadataRpc from '@polkadot/metadata/v12/static';

import { getRegistryPolkadot } from './getRegistryPolkadot';
export { metadataRpc };

/**
 * Base tx information common to all tested transactions
 */
export const TEST_BASE_TX_INFO = {
	address: '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
	blockHash:
		'0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
	blockNumber: 4302222,
	eraPeriod: 2400,
	genesisHash:
		'0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
	metadataRpc,
	nonce: 2,
	specVersion: 1019,
	tip: 0,
	transactionVersion: 6,
};

/**
 * Use this registry in tests.
 */
export const POLKADOT_25_TEST_OPTIONS = {
	metadataRpc,
	registry: getRegistryPolkadot(25, metadataRpc),
};

/**
 * Dummy arguments for all methods we're testing.
 */
export const TEST_METHOD_ARGS = {
	balances: {
		transfer: {
			dest: '14PiLtTQ3EBwsn6KimaBLH7qsZrryxFZtqFwAognHVZhFxU1',
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
