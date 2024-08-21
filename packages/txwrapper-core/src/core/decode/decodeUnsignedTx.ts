/**
 * @ignore
 */ /** */
import { hexToNumber } from '@polkadot/util';

import {
	DecodedUnsignedTx,
	OptionsWithMeta,
	UnsignedTransaction,
} from '../../types';
import { createMetadata, toTxMethod } from '..';

/**
 * Parse the transaction information from an unsigned transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeUnsignedTx(
	unsigned: UnsignedTransaction,
	options: OptionsWithMeta,
): DecodedUnsignedTx {
	const {
		metadataRpc,
		registry,
		asCallsOnlyArg,
		isImmortalEra,
		asSpecifiedCallsOnlyV14,
	} = options;

	registry.setMetadata(
		createMetadata(
			registry,
			metadataRpc,
			asCallsOnlyArg,
			asSpecifiedCallsOnlyV14,
		),
	);

	const methodCall = registry.createType('Call', unsigned.method);
	const method = toTxMethod(registry, methodCall);

	const eraPeriod = isImmortalEra
		? hexToNumber(registry.createType('ImmortalEra', unsigned.era).toHex())
		: registry.createType('MortalEra', unsigned.era).period.toNumber();
	const assetId = unsigned.assetId;

	let tip: number | string;
	try {
		tip = registry.createType('Compact<Balance>', unsigned.tip).toNumber();
	} catch (_error) {
		tip = registry.createType('Compact<Balance>', unsigned.tip).toString();
	}
	return {
		address: unsigned.address,
		assetId: !assetId
			? undefined
			: typeof assetId === 'object'
				? registry.createType('MultiLocation', assetId)
				: registry.createType('Compact<AssetId>', assetId).toNumber(),
		blockHash: unsigned.blockHash,
		blockNumber: registry
			.createType('BlockNumber', unsigned.blockNumber)
			.toNumber(),
		eraPeriod,
		genesisHash: unsigned.genesisHash,
		metadataHash: unsigned.metadataHash,
		metadataRpc,
		method,
		nonce: registry.createType('Compact<Index>', unsigned.nonce).toNumber(),
		specVersion: registry.createType('u32', unsigned.specVersion).toNumber(),
		tip,
		transactionVersion: registry
			.createType('u32', unsigned.transactionVersion)
			.toNumber(),
	};
}
