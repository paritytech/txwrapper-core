import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core/test-helpers';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferKeepAlive } from '../balances/transferKeepAlive';
import { asDerivative } from './asDerivative';

describe('utility::asDerivative', () => {
	it('should work', () => {
		const unsignedBalancesTransfer = transferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		const unsigned = asDerivative(
			{
				index: 1,
				call: unsignedBalancesTransfer.method,
			},
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x01010100060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);
	});
});
