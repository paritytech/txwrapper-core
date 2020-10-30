/**
 * @ignore
 */ /** */
import { UnsignedTransaction, OptionsWithMeta, DecodedUnsignedTx } from '../../types';
import { core } from '../../core'

/**
 * Parse the transaction information from an unsigned transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeUnsignedTx(
  unsigned: UnsignedTransaction,
  options: OptionsWithMeta,
  toInt = false
): DecodedUnsignedTx {
  const { metadataRpc, registry } = options;

  registry.setMetadata(core.metadata.createMetadata(registry, metadataRpc));

  const methodCall = registry.createType('Call', unsigned.method);
  const method = core.method.toTxMethod(registry, methodCall, toInt);

  return {
    address: unsigned.address,
    blockHash: unsigned.blockHash,
    blockNumber: registry
      .createType('BlockNumber', unsigned.blockNumber)
      .toNumber(),
    eraPeriod: registry.createType('MortalEra', unsigned.era).period.toNumber(),
    genesisHash: unsigned.genesisHash,
    metadataRpc,
    method,
    nonce: registry.createType('Compact<Index>', unsigned.nonce).toNumber(),
    specVersion: registry.createType('u32', unsigned.specVersion).toNumber(),
    tip: registry.createType('Compact<Balance>', unsigned.tip).toNumber(),
    transactionVersion: registry
      .createType('u32', unsigned.transactionVersion)
      .toNumber(),
  };
}
