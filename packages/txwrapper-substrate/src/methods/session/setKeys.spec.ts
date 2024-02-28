import {
	itHasCorrectBaseTxInfo,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { setKeys } from './setKeys';

describe('session::setKeys', () => {
	it('should work', () => {
		const unsigned = setKeys(
			TEST_METHOD_ARGS.session.setKeys,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS,
		);

		itHasCorrectBaseTxInfo(unsigned);
		expect(unsigned.method).toBe(
			'0x0800be0bccde60dcf2dee2562bc249b5c87a892b551b7058c2a4761ad05f57517ab70c635d996fb571f17b26a7ed139a52c71ef7161f07932d21bddeec8426647023bc29159bd6a6686e825bb16043903c461b61f682187d5ea50c59241526d96b43e2459cc64f42474adefc2108f938c594965127f2685002dcca69e25d4f5a8636a60957851edecb59585aec372d109b7ee5461cc7da38e70b24bf20cd126fa83f6c28300123ec5d172f707da0e387c066b47cc38198a41beeaf476ca24ac4f46a00',
		);
	});
});
