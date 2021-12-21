/**
 * @ignore
 */ /** */

import { hexToU8a } from '@polkadot/util';

import { DecodedSignedTx, OptionsWithMeta } from '../../types';
import { createMetadata, toTxMethod } from '..';

/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeSignedTx(
	signedTx: string,
	options: OptionsWithMeta
): DecodedSignedTx {
	const { metadataRpc, registry, asCallsOnlyArg } = options;

	registry.setMetadata(createMetadata(registry, metadataRpc, asCallsOnlyArg));

	const tx = registry.createType('Extrinsic', hexToU8a(signedTx), {
		isSigned: true,
	});
	const methodCall = registry.createType('Call', tx.method);
	const method = toTxMethod(registry, methodCall);

	return {
		address: tx.signer.toString(),
		eraPeriod: parseInt(tx.era.asMortalEra.period.toString()),
		metadataRpc,
		method,
		nonce: tx.nonce.toNumber(),
		tip: tx.tip.toNumber(),
	};
}
