/**
 * @ignore
 */ /** */
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
	options: OptionsWithMeta
): DecodedUnsignedTx {
	const { metadataRpc, registry } = options;

	registry.setMetadata(createMetadata(registry, metadataRpc));

	const methodCall = registry.createType('Call', unsigned.method);
	const method = toTxMethod(registry, methodCall);

	return {
		address: unsigned.address,
		blockHash: unsigned.blockHash,
		blockNumber: registry
			.createType('BlockNumber', unsigned.blockNumber)
			.toNumber(),
		eraPeriod: registry
			.createType('MortalEra', unsigned.era)
			.period.toNumber(),
		genesisHash: unsigned.genesisHash,
		metadataRpc,
		method,
		nonce: registry.createType('Compact<Index>', unsigned.nonce).toNumber(),
		specVersion: registry
			.createType('u32', unsigned.specVersion)
			.toNumber(),
		tip: registry.createType('Compact<Balance>', unsigned.tip).toNumber(),
		transactionVersion: registry
			.createType('u32', unsigned.transactionVersion)
			.toNumber(),
	};
}
