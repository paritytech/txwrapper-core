/**
 * @ignore
 */ /** */
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';
import { ExtrinsicEra } from '@polkadot/types/interfaces/extrinsics';
import { ModuleExtrinsics } from '@polkadot/types/metadata/decorate/types';
import { stringCamelCase } from '@polkadot/util';

import {
	OptionsWithMeta,
	TxInfo,
	TypeRegistry,
	UnsignedTransaction,
} from '../../types/';
import { createDecoratedTx, createMetadata } from '../metadata';

/**
 * Error messages for defineMethod
 */
export enum MethodErrorMessages {
	// An era period cannot be less than 4
	InvalidEraPeriodTooLow = 'lowest possible era period for a mortal tx is 4',
	// An era period cannot be greater than 65536
	InvalidEraPeriodTooHigh = 'largest possible era period for a mortal tx is 65536',
	// Decorated tx doesnt have the inputted pallet or method
	InvalidPalletOrMethod = 'pallet or method not found in metadata',
}

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
 * Check the information relevant to an era period, and return the correct
 * `ExtrinsicEra` as an Immortal or Mortal era.
 *
 * @param registry
 * @param blockNumber
 * @param eraPeriod
 * @param isImmortalEra
 * @returns
 */
export function checkEra(
	registry: TypeRegistry,
	blockNumber: number,
	eraPeriod: number = DEFAULTS.eraPeriod,
	isImmortalEra?: boolean
): ExtrinsicEra {
	const { InvalidEraPeriodTooLow, InvalidEraPeriodTooHigh } =
		MethodErrorMessages;
	/**
	 * Immortal transactions will be represented by the default value '0x00' for
	 * an era.
	 */
	if (isImmortalEra) {
		return registry.createType('ExtrinsicEra');
	}

	/**
	 * An era period cannot be less than 4 or greater than 65536.
	 * ie. (https://github.com/paritytech/substrate/pull/758)
	 *
	 * It is encouraged to send mortal transactions, but in the use case for an immortal transaction
	 * instead of passing in zero, you must use the `option`, `isImmortalEra`.
	 */
	if (eraPeriod < 4) {
		throw Error(InvalidEraPeriodTooLow);
	} else if (eraPeriod > 65536) {
		throw Error(InvalidEraPeriodTooHigh);
	}

	return registry.createType('ExtrinsicEra', {
		current: blockNumber,
		period: eraPeriod,
	});
}

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
	const { InvalidPalletOrMethod } = MethodErrorMessages;
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
		throw new Error(InvalidPalletOrMethod);
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

	const extrinsicEra = checkEra(
		registry,
		info.blockNumber,
		info.eraPeriod,
		isImmortalEra
	);

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
