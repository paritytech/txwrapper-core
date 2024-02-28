import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setConfigs } from './setConfigs';

describe('nominationPools::setConfigs', () => {
	it('should work', () => {
		const unsigned = setConfigs(
			TEST_METHOD_ARGS.nominationPools.setConfigs,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x290b0140420f000000000000000000000000000140420f000000000000000000000000000102000000010a00000001050000000100ca9a3b',
		);
	});
});
