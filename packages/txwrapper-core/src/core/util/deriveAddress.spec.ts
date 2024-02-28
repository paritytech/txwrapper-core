import { PolkadotSS58Format } from '@substrate/txwrapper-dev';

import { deriveAddress } from './deriveAddress';

describe('deriveAddress', () => {
	it('Should work for a Kusama sr25519 address', () => {
		const address = deriveAddress(
			'0x96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d',
			PolkadotSS58Format.kusama,
		);

		expect(address).toBe('Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s');
	});
	it('Should work for a westend ecdsa address', () => {
		const address = deriveAddress(
			'0x02e59f872a5a49b7d4807f4f52db82c6d62ce11ba6ce1d13e490cb6cab302874fc',
			PolkadotSS58Format.westend,
			'ecdsa',
		);
		expect(address).toBe('5HpStbV2wnRhqiy8zsxeKYxJRLyKrsbH3Pyq9nrXtTeWXwcq');
	});
});
