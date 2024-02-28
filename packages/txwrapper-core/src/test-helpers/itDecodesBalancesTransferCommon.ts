import { TEST_BASE_TX_INFO, TEST_METHOD_ARGS } from '@substrate/txwrapper-dev';

import {
	DecodedSignedTx,
	DecodedSigningPayload,
	DecodedUnsignedTx,
} from '../types';

/**
 * Information common to all decoded balances transfers used for testing.
 *
 * @param decoded info from a decoded tx
 */
export function itDecodesBalancesTransferCommon(
	decoded: DecodedSignedTx | DecodedSigningPayload | DecodedUnsignedTx,
): void {
	expect(decoded.method.pallet).toBe('balances');
	expect(decoded.method.name).toBe('transfer');
	expect(decoded.method.args.dest).toEqual(
		TEST_METHOD_ARGS.balances.transfer.dest,
	);
	expect(decoded.method.args.value).toEqual('12');

	// The actual period is the smallest power of 2 greater than the input
	// period.
	expect(decoded.eraPeriod).toBeGreaterThanOrEqual(TEST_BASE_TX_INFO.eraPeriod);
}
