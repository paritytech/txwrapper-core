import { Keyring } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { ASTAR_TEST_OPTIONS } from '../constants';
import { UnsignedTransaction } from '@substrate/txwrapper-core';
import { GenericSignerPayload } from '@polkadot/types';

/**
 * Sign a payload with seed `//Alice`.
 */
export async function signWithAliceAstar(
	signingPayload: UnsignedTransaction,
): Promise<`0x${string}`> {
	// We're creating an Alice account that will sign the payload
	// Wait for the promise to resolve async WASM
	await cryptoWaitReady();
	// Use ed25519 because it has deterministic signatures
	const keyring = new Keyring({ type: 'ed25519' });
	const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

	const genericPayload = new GenericSignerPayload(ASTAR_TEST_OPTIONS.registry, {
		...signingPayload,
		runtimeVersion: { specVersion: signingPayload.specVersion, transactionVersion: signingPayload.transactionVersion }
	}).toPayload();

	const { signature } = ASTAR_TEST_OPTIONS.registry
		.createType('ExtrinsicPayload', genericPayload, {
			version: genericPayload.version,
		})
		.sign(alice);

	return signature;
}
