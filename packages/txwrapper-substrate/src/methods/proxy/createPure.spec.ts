import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { createPure } from './createPure';

describe('proxy::createPure', () => {
	it('should work', () => {
		const unsigned = createPure(
			TEST_METHOD_ARGS.proxy.createPure,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x1e04001e0000000100');
	});
});
