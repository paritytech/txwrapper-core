import {
	KUSAMA_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransferKeepAlive } from '../../test-helpers';
import { itDecodesBalancesTransferKeepAlive } from '../../test-helpers';
import { DecodedSigningPayload } from '../../types';
import { construct } from '..';
import { decode } from './decode';
import { itDecodesSignedBalancesTransferTx } from './decodeSignedTx.spec';
import { itDecodesSigningPayloadBalancesTransfer } from './decodeSigningPayload.spec';
import { itDecodesUnsignedBalanceTransferTx } from './decodeUnsignedTx.spec';

describe('decode', () => {
	it('should decode signedTx', async () => {
		const unsigned = balancesTransferKeepAlive(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);
		const signingPayload = construct.signingPayload(
			unsigned,
			KUSAMA_TEST_OPTIONS,
		);
		const signature = await signWithAlice(signingPayload);
		const signedTx = construct.signedTx(
			unsigned,
			signature,
			KUSAMA_TEST_OPTIONS,
		);

		const decoded = decode(signedTx, KUSAMA_TEST_OPTIONS);

		itDecodesSignedBalancesTransferTx(decoded);

		itDecodesBalancesTransferKeepAlive(decoded);
	});

	it('decodes an unsigned tx', () => {
		const unsigned = balancesTransferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);
		const decoded = decode(unsigned, KUSAMA_TEST_OPTIONS);

		itDecodesUnsignedBalanceTransferTx(decoded);

		itDecodesBalancesTransferKeepAlive(decoded);
	});

	it('should decode signing payload', () => {
		const unsigned = balancesTransferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);
		const signingPayload = construct.signingPayload(
			unsigned,
			KUSAMA_TEST_OPTIONS,
		);

		const decoded = decode(
			signingPayload,
			KUSAMA_TEST_OPTIONS,
		) as unknown as DecodedSigningPayload;

		itDecodesSigningPayloadBalancesTransfer(decoded);

		itDecodesBalancesTransferKeepAlive(decoded);
	});
});
