import {
	itHasCorrectBaseTxInfo,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import { MANDALA_602_TEST_OPTIONS, TEST_METHOD_ARGS } from '../../test-helpers';
import { transferNativeCurrency } from './transferNativeCurrency';

describe('currencies::transferNativeCurrency', () => {
	it('should work', () => {
		const unsigned = transferNativeCurrency(
			TEST_METHOD_ARGS.currencies.transferNativeCurrency,
			TEST_BASE_TX_INFO,
			MANDALA_602_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x0501ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4830'
		);
	});

	it('should accept big numbers as string', () => {
		const unsigned = transferNativeCurrency(
			{
				...TEST_METHOD_ARGS.currencies.transferNativeCurrency,
				amount: '9007199254740996', // MAX_SAFE_INTEGER + 5
			},
			TEST_BASE_TX_INFO,
			MANDALA_602_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x0501ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480f04000000000020'
		);
	});
});
