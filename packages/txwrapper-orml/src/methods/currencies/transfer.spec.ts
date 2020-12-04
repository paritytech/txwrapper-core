import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-core/src/test-helpers';

import { transfer } from './transfer';

describe('currencies::transfer', () => {
	it('should work', () => {
		const unsigned = transfer(
			TEST_METHOD_ARGS.currencies.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);
	});
});
