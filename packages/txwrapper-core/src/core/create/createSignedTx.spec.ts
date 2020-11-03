import {
	POLKADOT_25_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '../../test-helpers';
import { balancesTransfer } from '../../test-helpers';
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';

describe('createSignedTx', () => {
	it('should work', async (done) => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);
		const signingPayload = createSigningPayload(
			unsigned,
			POLKADOT_25_TEST_OPTIONS
		);
		const signature = await signWithAlice(signingPayload);

		const tx = createSignedTx(
			unsigned,
			signature,
			POLKADOT_25_TEST_OPTIONS
		);
		expect(tx).toBe(
			'0x250284d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00483ff9e9dd1a0473bd47f359732f3c0c61a4c7753ffecbba785213eee19acdab289febd634144d70e1b50b0b77b0394103bb5e13b0945c8b366c808069de130ceb580800060096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);

		done();
	});
});
