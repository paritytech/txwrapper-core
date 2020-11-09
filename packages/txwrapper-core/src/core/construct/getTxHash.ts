import { blake2AsHex } from '@polkadot/util-crypto';

/**
 * Derive the tx hash of a signed transaction offline.
 *
 * @param signedTx - The hex encoding of a signed transaction
 */
export function getTxHash(signedTx: string): string {
	return blake2AsHex(signedTx, 256);
}
