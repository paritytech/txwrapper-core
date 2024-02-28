import { Keyring } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { KUSAMA_TEST_OPTIONS } from '../constants';

/**
 * Sign a payload with seed `//Alice`.
 */
export async function signWithAlice(
	signingPayload: string,
): Promise<`0x${string}`> {
	// We're creating an Alice account that will sign the payload
	// Wait for the promise to resolve async WASM
	await cryptoWaitReady();
	// Use ed25519 because it has deterministic signatures
	const keyring = new Keyring({ type: 'ed25519' });
	const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

	const { signature } = KUSAMA_TEST_OPTIONS.registry
		.createType('ExtrinsicPayload', signingPayload, {
			version: 4,
		})
		.sign(alice);

	return signature;
}
