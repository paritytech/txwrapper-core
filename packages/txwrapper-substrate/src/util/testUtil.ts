import metadataRpc from '@polkadot/metadata/v11/static';
import { UnsignedTransaction } from './types';
import { getRegistry } from './metadata';

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
    metadataRpc,
    nonce: 2,
    specVersion: 1019,
    tip: 0,
    transactionVersion: 6,
};

/**
 * Use this registry in tests.
 */
export const KUSAMA_TEST_OPTIONS = {
    metadataRpc,
    registry: getRegistry('Kusama', 'kusama', 9999),
};

/**
 * Test helper to test that all base tx information is correctly populated.
 *
 * @param unsigned - Unsigned transaction to test
 */
export function testBaseTxInfo(unsigned: UnsignedTransaction): void {
    (['address', 'blockHash', 'genesisHash'] as const).forEach((key) =>
        expect(unsigned[key]).toBe(TEST_BASE_TX_INFO[key])
    );
    expect(unsigned.blockNumber).toBe('0x0041a58e');
    expect(unsigned.era).toBe('0xeb58');
    expect(unsigned.nonce).toBe('0x00000002');
    expect(unsigned.specVersion).toBe('0x000003fb');
    expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
    expect(unsigned.transactionVersion).toBe('0x00000006');
    expect(unsigned.version).toBe(4);
}