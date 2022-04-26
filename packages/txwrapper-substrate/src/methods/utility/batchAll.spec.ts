import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferKeepAlive } from '../balances/transferKeepAlive';
import { batchAll } from './batchAll';

describe('utility::batchAll', () => {
	it('should work', () => {
		const unsignedBalancesTransferKeepAlive = transferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		const unsignedBatchAll = batchAll(
			{
				calls: [unsignedBalancesTransferKeepAlive.method],
			},
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsignedBatchAll);

		expect(unsignedBatchAll.method).toBe(
			'0x010204060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);
	});
});
