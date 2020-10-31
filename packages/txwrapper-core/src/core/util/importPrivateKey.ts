import { Keyring } from '@polkadot/keyring';
import { KeyringPair as KeyringPairBase } from '@polkadot/keyring/types';
import { hexToU8a } from '@polkadot/util';

import { KUSAMA_SS58_FORMAT } from '../../customTypes/constants';

/**
 * A keyring pair
 */
export type KeyringPair = KeyringPairBase; // eslint-disable-line @typescript-eslint/no-empty-interface
// Using an interface above so that KeyringPair shows up in docs

/**
 * Import a private key and create a KeyringPair.
 * @param privateKey - The private key of the key pair.
 * @param ss58Format - The SS58 encoding of the address.
 */
export function importPrivateKey(
	privateKey: string | Uint8Array,
	ss58Format: number = KUSAMA_SS58_FORMAT
): KeyringPair {
	const keyring = new Keyring({ type: 'ed25519' });
	keyring.setSS58Format(ss58Format);

	if (typeof privateKey === 'string') {
		return keyring.addFromSeed(hexToU8a(privateKey));
	}

	return keyring.addFromSeed(privateKey);
}
