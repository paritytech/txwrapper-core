import {
	itHasCorrectBaseTxInfo,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import {
	MANDALA_2082_TEST_OPTIONS,
	TEST_METHOD_ARGS,
} from '../../test-helpers';
import { transfer } from './transfer';

describe('currencies::transfer', () => {
	it('should work', () => {
		const unsigned = transfer(
			TEST_METHOD_ARGS.currencies.transfer,
			TEST_BASE_TX_INFO,
			MANDALA_2082_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x0c00008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48000030'
		);
	});

	it('should accept big numbers as string', () => {
		const unsigned = transfer(
			{
				...TEST_METHOD_ARGS.currencies.transfer,
				amount: '9007199254740996', // MAX_SAFE_INTEGER + 5
			},
			TEST_BASE_TX_INFO,
			MANDALA_2082_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x0c00008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800000f04000000000020'
		);
	});
});
