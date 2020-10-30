import { Keyring } from '@polkadot/api';
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { core } from '../core';
import { metadataRpc } from './constants';

/**
 * Sign a payload with seed `//Alice`.
 */
export async function signWithAlice(signingPayload: string): Promise<string> {
  // We're creating an Alice account that will sign the payload
  // Wait for the promise to resolve async WASM
  await cryptoWaitReady();

  const registry = core.metadata.getRegistry(
    'Polkadot',
    'polkadot',
    25,
    metadataRpc
  );
  // Use ed25519 because it has deterministic signatures
  const keyring = new Keyring({ type: 'ed25519' });
  const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

  const { signature } = registry
    .createType('ExtrinsicPayload', signingPayload, {
      version: EXTRINSIC_VERSION,
    })
    .sign(alice);

  return signature;
}
