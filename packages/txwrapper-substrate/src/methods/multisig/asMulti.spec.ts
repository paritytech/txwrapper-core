import {
	itHasCorrectBaseTxInfo,
	KUSAMA_9320_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
} from '@substrate/txwrapper-dev';

import { TEST_METHOD_ARGS } from '../../test-helpers';
import { transferKeepAlive } from '../balances/transferKeepAlive';
import { asMulti } from './asMulti';

describe('multisig::asMulti', () => {
	it('should work', () => {
		const unsigned = asMulti(
			TEST_METHOD_ARGS.multisig.asMulti,
			TEST_BASE_TX_INFO,
			KUSAMA_9320_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x1f0102000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22017b00000003000000040300cc5fc7439d3c49984e7345319de148561cd930748fb401276d289f714acdd50c2813f6ffffffffff3f0100'
		);
	});

	it('should accept another txwrapper method as a `call`', () => {
		const unsignedBalancesTransferKeepAlive = transferKeepAlive(
			TEST_METHOD_ARGS.balances.transferKeepAlive,
			TEST_BASE_TX_INFO,
			KUSAMA_9320_TEST_OPTIONS
		);

		const unsignedAsMulti = asMulti(
			{
				...TEST_METHOD_ARGS.multisig.asMulti,
				call: unsignedBalancesTransferKeepAlive.method,
			},
			TEST_BASE_TX_INFO,
			KUSAMA_9320_TEST_OPTIONS
		);

		itHasCorrectBaseTxInfo(unsignedAsMulti);

		expect(unsignedAsMulti.method).toBe(
			'0x1f0102000cd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22017b0000000300000004030096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d3013f6ffffffffff3f0100'
		);
	});
});
