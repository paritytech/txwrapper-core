/**
 * @ignore
 */ /** */
import { GenericSignerPayload } from '@polkadot/types';
import { createTypeUnsafe } from '@polkadot/types/create';
import { Call, ExtrinsicPayload } from '@polkadot/types/interfaces';

import {
	DecodedSigningPayload,
	OptionsWithMeta,
	UnsignedTransaction,
} from '../../types';
import { createMetadata, toTxMethod } from '..';

/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeSigningPayload(
	signingPayload: UnsignedTransaction | string,
	options: OptionsWithMeta,
): DecodedSigningPayload {
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

	let payload: ExtrinsicPayload;

	// We use `createTypeUnsafe` here because it allows us to specify `withoutLog: true`,
	// which silences an internal error message from polkadot-js. This is helpful in `decode`
	// which takes in just a string. We determine if the string is a signing payload or a
	// signed tx by first attempting to decode it as a signing payload with this function.
	// If that fails we catch, knowing through process of elimination it should be a
	// signed tx. `withoutLog: true` prevents an alarming error message from bubbling up
	// to the user when we catch.
	if (typeof signingPayload === 'string') {
		payload = createTypeUnsafe(registry, 'ExtrinsicPayload', [
			signingPayload,
			{
				version: 4,
			},
		]);
	} else {
		const genericPayload = new GenericSignerPayload(registry, {
			...signingPayload,
			runtimeVersion: {
				specVersion: signingPayload.specVersion,
				transactionVersion: signingPayload.transactionVersion,
			},
		}).toPayload();

		payload = createTypeUnsafe(registry, 'ExtrinsicPayload', [
			genericPayload,
			{
				version: genericPayload.version,
			},
		]);
	}

	const methodCall: Call = createTypeUnsafe(registry, 'Call', [payload.method]);
	const method = toTxMethod(registry, methodCall);

	// Immortal eras should return a period of 0
	const eraPeriod = payload.era.isMortalEra
		? payload.era.asMortalEra.period.toNumber()
		: 0;

	let assetId: object | number | undefined;
	if (payload.inner.assetId) {
		assetId = payload.inner.assetId.isSome ? payload.inner.assetId : undefined;
	}
	let tip: number | string;
	try {
		tip = payload.tip.toNumber();
	} catch (_error) {
		tip = payload.tip.toString();
	}
	let metadataHash: string | undefined;
	if (payload.inner.metadataHash) {
		metadataHash = payload.inner.metadataHash.isSome
			? payload.inner.metadataHash.toString()
			: undefined;
	}

	return {
		assetId,
		blockHash: payload.blockHash.toHex(),
		eraPeriod,
		genesisHash: payload.genesisHash.toHex(),
		metadataHash,
		metadataRpc,
		method,
		nonce: payload.nonce.toNumber(),
		specVersion: payload.specVersion.toNumber(),
		tip,
		transactionVersion: payload.transactionVersion.toNumber(),
	};
}
