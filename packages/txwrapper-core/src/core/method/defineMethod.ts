/**
 * @ignore
 */ /** */
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';
import { ModuleExtrinsics } from '@polkadot/types/metadata/decorate/types';
import { stringCamelCase } from '@polkadot/util';

import { OptionsWithMeta, TxInfo, UnsignedTransaction } from '../../types/';
import { createDecoratedTx, createMetadata } from '../metadata';

/**
 * Default values for tx info, if the user doesn't specify any
 */
const DEFAULTS = {
	/**
	 * Don't add any tip by default.
	 */
	tip: 0,
	/**
	 * Construct a mortal extrinsic of ~6m24s minutes.
	 */
	eraPeriod: 64,
};

/**
 * Helper function to construct an offline method.
 *
 * @param info - All info necessary to construct a method. That includes base
 * tx info, as well as method name & arguments.
 */
export function defineMethod(
	info: TxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	const {
		metadataRpc,
		registry,
		asCallsOnlyArg,
		signedExtensions,
		userExtensions,
		isImmortalEra,
	} = options;
	const generatedMetadata = createMetadata(
		registry,
		metadataRpc,
		asCallsOnlyArg
	);

	registry.setMetadata(generatedMetadata, signedExtensions, userExtensions);

	const tx = createDecoratedTx(registry, metadataRpc);

	const methodFunction =
		!!tx[info.method.pallet] &&
		(tx[info.method.pallet] as unknown as ModuleExtrinsics)[info.method.name];
	if (!methodFunction) {
		throw new Error('pallet or method not found in metadata');
	}

	const method = methodFunction(
		...methodFunction.meta.args.map((arg) => {
			if (
				info.method.args[stringCamelCase(arg.name.toString())] === undefined
			) {
				throw new Error(
					`Method ${info.method.pallet}::${
						info.method.name
					} expects argument ${arg.toString()}, but got undefined`
				);
			}

			return info.method.args[stringCamelCase(arg.name.toString())];
		})
	).toHex();

	/**
	 * If the `info.eraPeriod` is set use it. (This also checks for the edgecase zero).
	 * As a last resort, it will use the default value of 64. If the eraPeriod is less than 4,
	 * for a mortal era, it will default to 4.
	 */
	const eraPeriod =
		info.eraPeriod === 0 || info.eraPeriod
			? info.eraPeriod
			: DEFAULTS.eraPeriod;

	const extrinsicEra = isImmortalEra
		? registry.createType('ExtrinsicEra')
		: registry.createType('ExtrinsicEra', {
				current: info.blockNumber,
				period: eraPeriod,
		  });

	return {
		address: info.address,
		blockHash: info.blockHash,
		blockNumber: registry.createType('BlockNumber', info.blockNumber).toHex(),
		era: extrinsicEra.toHex(),
		genesisHash: info.genesisHash,
		metadataRpc: generatedMetadata.toHex(),
		method,
		nonce: registry.createType('Compact<Index>', info.nonce).toHex(),
		signedExtensions: registry.signedExtensions,
		specVersion: registry.createType('u32', info.specVersion).toHex(),
		tip: registry
			.createType('Compact<Balance>', info.tip || DEFAULTS.tip)
			.toHex(),
		transactionVersion: registry
			.createType('u32', info.transactionVersion)
			.toHex(),
		version: EXTRINSIC_VERSION,
	};
}
