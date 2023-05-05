import { TEST_BASE_TX_INFO } from '../constants';
import { UnsignedTransaction } from '../mock-types';

/**
 * Test helper to test that all base tx information is correctly populated.
 *
 * @param unsigned - Unsigned transaction to test
 */
export function itHasCorrectBaseTxInfo(unsigned: UnsignedTransaction): void {
	(['address', 'blockHash', 'genesisHash'] as const).forEach((key) =>
		expect(unsigned[key]).toBe(TEST_BASE_TX_INFO[key])
	);

	expect(unsigned.blockNumber).toBe('0x0041a58e');
	expect(unsigned.era).toBe('0xeb58');
	expect(unsigned.nonce).toBe('0x00000002');
	expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
	expect(unsigned.transactionVersion).toBe('0x00000006');
	expect(unsigned.version).toBe(4);
}
