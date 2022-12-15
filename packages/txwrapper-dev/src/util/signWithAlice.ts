import { Keyring } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { metadataRpc } from '../metadata/static/staticV3-1-1';
import { getRegistryPolkadot } from '../registries';

/**
 * Sign a payload with seed `//Alice`.
 */
export async function signWithAlice(
	signingPayload: string
): Promise<`0x${string}`> {
	// We're creating an Alice account that will sign the payload
	// Wait for the promise to resolve async WASM
	await cryptoWaitReady();

	const registry = getRegistryPolkadot(25, metadataRpc);
	// Use ed25519 because it has deterministic signatures
	const keyring = new Keyring({ type: 'ed25519' });
	const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

	const { signature } = registry
		.createType('ExtrinsicPayload', signingPayload, {
			version: 4,
		})
		.sign(alice);

	return signature;
}
