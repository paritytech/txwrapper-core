// import { TEST_BASE_TX_INFO } from '../../test';
// import { DecodedSignedTx } from '../../types';

// /**
//  * Helper function to decode base tx info
//  */
// export function decodeBaseTxInfo(txInfo: DecodedSignedTx): void {
//   (['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach((key) =>
//     expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key])
//   );

//   // The actual period is the smallest power of 2 greater than the input
//   // period.
//   expect(txInfo.eraPeriod).toBeGreaterThanOrEqual(TEST_BASE_TX_INFO.eraPeriod);
// }
