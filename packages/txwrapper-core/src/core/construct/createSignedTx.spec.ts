import {
	KUSAMA_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';

describe('createSignedTx', () => {
	it('should work', async () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);
		const signingPayload = createSigningPayload(unsigned, KUSAMA_TEST_OPTIONS);
		const signature = await signWithAlice(signingPayload);

		const tx = createSignedTx(unsigned, signature, KUSAMA_TEST_OPTIONS);
		expect(tx).toBe(
			'0x2d028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00100481b4de72b4a70b16db6573f707eb8047980c76bf34b3e055c4bf0e00c3fee59272d9072cea0a3af3a3aa04d158781e09049ea8c6dc5322fe39a567a3410beb58080004000096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);
	});
});
