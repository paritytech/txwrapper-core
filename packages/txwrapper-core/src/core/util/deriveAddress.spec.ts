import { PolkadotSS58Format } from '@substrate/txwrapper-dev/constants';
import { deriveAddress } from './deriveAddress';

describe('deriveAddress', () => {
	it('should work', () => {
		const address = deriveAddress(
			'0x96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d',
			PolkadotSS58Format.kusama
		);

		expect(address).toBe('Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s');
	});
});
