import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { nominate } from './nominate';

describe('staking::nominate', () => {
	it('should work', () => {
		const unsigned = nominate(
			TEST_METHOD_ARGS.staking.nominate,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x060508008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480090b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22',
		);
	});
});
