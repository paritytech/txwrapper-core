import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferKeepAlive } from '../balances/transferKeepAlive';
import { batch } from './batch';

describe('utility::batch', () => {
	it('should work', () => {
		const unsignedBalancesTransferKeepAlive = transferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		const unsignedBatch = batch(
			{
				calls: [unsignedBalancesTransferKeepAlive.method],
			},
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsignedBatch);

		expect(unsignedBatch.method).toBe(
			'0x18000404030096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30',
		);
	});
});
