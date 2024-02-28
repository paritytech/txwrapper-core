import {
	itHasCorrectBaseTxInfo,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { INTERLAY_4_TEST_OPTIONS, TEST_METHOD_ARGS } from '../../test-helpers';
import { transferKeepAlive } from './transferKeepAlive';

describe('tokens::transfer', () => {
	it('should work', () => {
		const unsigned = transferKeepAlive(
			TEST_METHOD_ARGS.tokens.transfer,
			TEST_BASE_TX_INFO,
			INTERLAY_4_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x15028eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48000230',
		);
	});

	it('should accept big numbers as string', () => {
		const unsigned = transferKeepAlive(
			{
				...TEST_METHOD_ARGS.tokens.transfer,
				amount: '9007199254740996', // MAX_SAFE_INTEGER + 5
			},
			TEST_BASE_TX_INFO,
			INTERLAY_4_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x15028eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800020f04000000000020',
		);
	});
});
