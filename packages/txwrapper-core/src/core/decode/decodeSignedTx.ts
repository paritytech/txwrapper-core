/**
 * @ignore
 */ /** */

import { hexToU8a } from '@polkadot/util';

import { DecodedSignedTx, OptionsWithMeta } from '../../types';
import { createMetadata, toTxMethod } from '..';

/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @param signedTx - The JSON representing the signed transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeSignedTx(
	signedTx: string,
	options: OptionsWithMeta,
): DecodedSignedTx {
	const { metadataRpc, registry, asCallsOnlyArg, asSpecifiedCallsOnlyV14 } =
		options;

	registry.setMetadata(
		createMetadata(
			registry,
			metadataRpc,
			asCallsOnlyArg,
			asSpecifiedCallsOnlyV14,
		),
	);

	const tx = registry.createType('Extrinsic', hexToU8a(signedTx), {
		isSigned: true,
	});
	const methodCall = registry.createType('Call', tx.method);
	const method = toTxMethod(registry, methodCall);

	let tip: number | string;

	try {
		tip = tx.tip.toNumber();
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (_error) {
		tip = tx.tip.toString();
	}

	return {
		address: tx.signer.toString(),
		eraPeriod: tx.era.asMortalEra.period.toNumber(),
		metadataRpc,
		method,
		nonce: tx.nonce.toNumber(),
		tip,
	};
}
