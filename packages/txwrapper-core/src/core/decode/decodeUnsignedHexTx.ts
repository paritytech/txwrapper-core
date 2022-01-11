import { hexToU8a } from '@polkadot/util';

import {
	DecodedUnsignedHexTx,
	IMethod,
	OptionsWithMeta,
} from '../../types';

/**
 * This should be used in conjunction with `encodeUnsignedTx` as the expected
 * payload will match the `Extrinsic` type we are generating via polkadot-js.
 *
 * @param encodedUnsignedTx Generated by `encodeUnsignedTx`
 * @param options Runtime-specific data used for decoding the transaction.
 */
export function decodeUnsignedHexTx(
	encodedUnsignedTx: string,
	options: OptionsWithMeta
): DecodedUnsignedHexTx {
	const decodedTx = options.registry.createType(
		'Extrinsic',
		hexToU8a(encodedUnsignedTx)
	);

	return {
		method: decodedTx.method.toJSON() as IMethod,
		version: decodedTx.version,
	};
}
