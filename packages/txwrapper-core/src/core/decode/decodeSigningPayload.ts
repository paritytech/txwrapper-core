/**
 * @ignore
 */ /** */
import { createTypeUnsafe } from '@polkadot/types/create';
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';
import { Call, ExtrinsicPayload } from '@polkadot/types/interfaces';

import { DecodedSigningPayload, OptionsWithMeta } from '../../types';
import { createMetadata, toTxMethod } from '..';

/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeSigningPayload(
	signingPayload: string,
	options: OptionsWithMeta
): DecodedSigningPayload {
	const { metadataRpc, registry, asCallsOnlyArg, asSpecifiedCallsOnlyV14 } =
		options;

	registry.setMetadata(
		createMetadata(
			registry,
			metadataRpc,
			asCallsOnlyArg,
			asSpecifiedCallsOnlyV14
		)
	);

	// We use `createTypeUnsafe` here because it allows us to specify `withoutLog: true`,
	// which silences an internal error message from polkadot-js. This is helpful in `decode`
	// which takes in just a string. We determine if the string is a signing payload or a
	// signed tx by first attempting to decode it as a signing payload with this function.
	// If that fails we catch, knowing through process of elimination it should be a
	// signed tx. `withoutLog: true` prevents an alarming error message from bubbling up
	// to the user when we catch.
	const payload: ExtrinsicPayload = createTypeUnsafe(
		registry,
		'ExtrinsicPayload',
		[
			signingPayload,
			{
				version: EXTRINSIC_VERSION,
			},
		]
	);
	const methodCall: Call = createTypeUnsafe(registry, 'Call', [payload.method]);
	const method = toTxMethod(registry, methodCall);

	// Immortal eras should return a period of 0
	const eraPeriod = payload.era.isMortalEra
		? payload.era.asMortalEra.period.toNumber()
		: 0;

	return {
		blockHash: payload.blockHash.toHex(),
		eraPeriod,
		genesisHash: payload.genesisHash.toHex(),
		metadataRpc,
		method,
		nonce: payload.nonce.toNumber(),
		specVersion: payload.specVersion.toNumber(),
		tip: payload.tip.toNumber(),
		transactionVersion: payload.transactionVersion.toNumber(),
	};
}
