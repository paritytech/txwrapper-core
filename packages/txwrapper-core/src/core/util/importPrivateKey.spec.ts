import { PolkadotSS58Format } from '@substrate/txwrapper-dev';

import { importPrivateKey } from './importPrivateKey';

const PRIVATE_KEY =
	'0x9d61b19deffd5a60ba844af492ec2cc44449c5697b326919703bac031cae7f60';

describe('importPrivateKey', () => {
	it('should work', () => {
		const keypair = importPrivateKey(PRIVATE_KEY, PolkadotSS58Format.kusama);

		expect(keypair.address).toBe(
			'HSgj13mnepYxuysui2XroHKigftFpQsg1dcSfA9PckdZJW4',
		);
	});

	it('should work', () => {
		const keypair = importPrivateKey(PRIVATE_KEY, PolkadotSS58Format.polkadot);

		expect(keypair.address).toBe(
			'15sND1xy2556eoAx6eGV6zkURiPJ9T9qJ8XMDHsYTuZezp7f',
		);
	});
});
