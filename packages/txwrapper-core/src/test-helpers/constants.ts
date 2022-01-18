import { getRegistryPolkadot } from './getRegistryPolkadot';
import { polkadotV9122MetadataHex } from './metadata/polkadotV9122MetadataHex';
import { metadataRpc } from './staticV3-1-1';
import { metadataRpcV29 } from './staticV4-3-1';
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
	metadataRpc: metadataRpc,
	nonce: 2,
	specVersion: 1019,
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
