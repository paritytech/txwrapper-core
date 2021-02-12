import {
	itHasCorrectBaseTxInfo,
	POLKADOT_25_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-core';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferKeepAlive } from '../balances/transferKeepAlive';
import { asMulti } from './asMulti';

describe('multisig::asMulti', () => {
	it('should work', () => {
		const unsigned = asMulti(
			TEST_METHOD_ARGS.multisig.asMulti,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1e0102000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22017b00000003000000a80500306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc200f00a0be1c44839900f6ffffffffff3f01'
		);
	});

	it('should accept another txwrapper method as a `call`', () => {
		const unsignedBalancesTransferKeepAlive = transferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		const unsignedAsMulti = asMulti(
			{
				...TEST_METHOD_ARGS.multisig.asMulti,
				call: unsignedBalancesTransferKeepAlive.method,
			},
			TEST_BASE_TX_INFO,
			POLKADOT_25_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsignedAsMulti);

		expect(unsignedAsMulti.method).toBe(
			'0x1e0102000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22017b000000030000008c060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d3000f6ffffffffff3f01'
		);
	});
});
