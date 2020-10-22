import * as methods from '../methods';
import {
  getAllMethods,
  KUSAMA_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TxInfo,
} from '../util';
import { decodeUnsignedTx } from './decodeUnsignedTx';

/**
 * Helper function to decode base tx info
 */
export function decodeBaseTxInfo(txInfo: TxInfo): void {
  ([
    'address',
    'blockHash',
    'blockNumber',
    'genesisHash',
    'metadataRpc',
    'nonce',
    'specVersion',
    'transactionVersion',
    'tip',
  ] as const).forEach((key) =>
    expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key])
  );

  // The actual period is the smallest power of 2 greater than the input
  // period.
  expect(txInfo.eraPeriod).toBeGreaterThanOrEqual(TEST_BASE_TX_INFO.eraPeriod);
}

/**
 * Test the [[decodeUnsignedTx]] function
 */
function testDecodeUnsignedTx(pallet: string, name: string): void {
  it(`should decode ${pallet}::${name}`, () => {
    /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any */
    const unsigned = (methods as any)[pallet][name](
      (TEST_METHOD_ARGS as any)[pallet][name],
      TEST_BASE_TX_INFO,
      KUSAMA_TEST_OPTIONS
    );
    /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any */
    const txInfo = decodeUnsignedTx(unsigned, KUSAMA_TEST_OPTIONS);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe(pallet);
    expect(txInfo.method.name).toBe(name);
    expect(txInfo.method.args).toEqual((TEST_METHOD_ARGS as any)[pallet][name]);
  });
}

describe('decodeUnsignedTx', () => {
  getAllMethods().forEach((method) => testDecodeUnsignedTx(...method));
});
