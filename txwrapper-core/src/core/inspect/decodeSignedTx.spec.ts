
// TODO move this to a generic testing function
// TODO creates static test for decodeSignedTx

// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// import {core} from '../../core';
// import * as methods from '../methods';
// import {
//   getAllMethods,
//   KUSAMA_TEST_OPTIONS,
//   signWithAlice,
//   TEST_BASE_TX_INFO,
//   TEST_METHOD_ARGS,
// } from '../../util';
// import { DecodedSignedTx, decodeSignedTx } from './decodeSignedTx';

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

// /**
//  * Test the [[decodeSignedTx]] function
//  */
// function testDecodeSignedTx(pallet: string, name: string): void {
//   it(`should decode ${pallet}::${name}`, async (done) => {
//     const unsigned = (methods as any)[pallet][name](
//       (TEST_METHOD_ARGS as any)[pallet][name],
//       TEST_BASE_TX_INFO,
//       KUSAMA_TEST_OPTIONS
//     );
//     const signingPayload = createSigningPayload(unsigned, KUSAMA_TEST_OPTIONS);
//     const signature = await signWithAlice(signingPayload);

//     const signedTx = createSignedTx(unsigned, signature, KUSAMA_TEST_OPTIONS);

//     const txInfo = decodeSignedTx(signedTx, KUSAMA_TEST_OPTIONS);

//     decodeBaseTxInfo(txInfo);
//     expect(txInfo.method.pallet).toBe(pallet);
//     expect(txInfo.method.name).toBe(name);
//     expect(txInfo.method.args).toEqual((TEST_METHOD_ARGS as any)[pallet][name]);

//     done();
//   });
// }

// describe('decodeSignedTx', () => {
//   getAllMethods().forEach((method) => testDecodeSignedTx(...method));
// });
