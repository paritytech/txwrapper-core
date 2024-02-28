import {
	itHasCorrectBaseTxInfo,
	WESTEND_TEST_BASE_TX_INFO,
	WESTEND_TEST_OPTIONS,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { bond } from './bond';

describe('staking::bond', () => {
	it('should work', () => {
		const unsigned = bond(
			TEST_METHOD_ARGS.staking.bond,
			WESTEND_TEST_BASE_TX_INFO,
			WESTEND_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe('0x0600910100');
	});

	it('should take "staked" or "Staked" as payee', () => {
		const unsignedLowerCase = bond(
			{ ...TEST_METHOD_ARGS.staking.bond, payee: 'staked' },
			WESTEND_TEST_BASE_TX_INFO,
			WESTEND_TEST_OPTIONS,
		);
		const unsignedCapitalized = bond(
			{ ...TEST_METHOD_ARGS.staking.bond, payee: 'Staked' },
			WESTEND_TEST_BASE_TX_INFO,
			WESTEND_TEST_OPTIONS,
		);

		expect(unsignedLowerCase.method).toBe(unsignedCapitalized.method);
	});
});
