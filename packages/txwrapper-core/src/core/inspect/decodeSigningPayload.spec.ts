// import { createSigningPayload } from '../createSigningPayload';
// import * as methods from '../methods';
// import {
//   getAllMethods,
//   KUSAMA_TEST_OPTIONS,
//   TEST_BASE_TX_INFO,
//   TEST_METHOD_ARGS,
// } from '../../util';
// import {
//   DecodedSigningPayload,
//   decodeSigningPayload,
// } from './decodeSigningPayload';

// /**
//  * Helper function to decode base tx info
//  */
// export function decodeBaseTxInfo(txInfo: DecodedSigningPayload): void {
//   ([
//     'blockHash',
//     'genesisHash',
//     'metadataRpc',
//     'nonce',
//     'specVersion',
//     'tip',
//   ] as const).forEach((key) =>
//     expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key])
//   );
// }

// /**
//  * Test the [[decodeSigningPayload]] function
//  */
// function testDecodeSigningPayload(pallet: string, name: string): void {
//   it(`should decode ${pallet}::${name}`, () => {
//     const signingPayload = createSigningPayload(
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
//       (methods as any)[pallet][name](
//         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
//         (TEST_METHOD_ARGS as any)[pallet][name],
//         TEST_BASE_TX_INFO,
//         KUSAMA_TEST_OPTIONS
//       ),
//       KUSAMA_TEST_OPTIONS
//     );
//     const txInfo = decodeSigningPayload(signingPayload, KUSAMA_TEST_OPTIONS);

//     decodeBaseTxInfo(txInfo);
//     expect(txInfo.method.pallet).toBe(pallet);
//     expect(txInfo.method.name).toBe(name);
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
//     expect(txInfo.method.args).toEqual((TEST_METHOD_ARGS as any)[pallet][name]);
//   });
// }

// describe('decodeSigningPayload', () => {
//   getAllMethods().forEach((method) => testDecodeSigningPayload(...method));
// });
