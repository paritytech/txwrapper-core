import { Keyring } from '@polkadot/keyring';
import { hexToU8a, isHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

/**
 * Copyright 2023 via polkadot-js/common
 *
 * The slightly modified below logic is copyrighted from polkadot-js/common . The exact path to the code can be seen here:
 * https://github.com/polkadot-js/common/blob/e5cb0ba2b4a6b5817626cc964b4f66334f2410e4/packages/keyring/src/pair/index.ts#L44-L49
 */
const TYPE_ADDRESS = {
	ecdsa: (p: Uint8Array) => (p.length > 32 ? blake2AsU8a(p) : p),
	ed25519: (p: Uint8Array) => p,
	sr25519: (p: Uint8Array) => p,
};

/**
 * Derive an address from a cryptographic public key offline.
 *
 * @param publicKey - The public key to derive from.
 * @param ss58Format - The SS58 format to use.
 * @param scheme - The scheme in which you want to apply. It defaults to sr25519
 */
export function deriveAddress(
	publicKey: string | Uint8Array,
	ss58Format: number,
	scheme: 'ed25519' | 'sr25519' | 'ecdsa' = 'sr25519'
): string {
	const raw = isHex(publicKey)
		? hexToU8a(publicKey)
		: (publicKey as Uint8Array);
	const input = TYPE_ADDRESS[scheme](raw);

	const keyring = new Keyring({ type: scheme, ss58Format: ss58Format });
	const address = keyring.encodeAddress(input, ss58Format);

	return address;
}
