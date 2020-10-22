/**
 * @ignore
 */ /** */

import {
  createMetadata,
  EXTRINSIC_VERSION,
  OptionsWithMeta,
  toTxMethod,
  TxInfo,
} from '../util';

export type DecodedSigningPayload = Omit<TxInfo, 'address' | 'blockNumber'>;

/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeSigningPayload(
  signingPayload: string,
  options: OptionsWithMeta,
  toInt = false
): DecodedSigningPayload {
  const { metadataRpc, registry } = options;

  registry.setMetadata(createMetadata(registry, metadataRpc));

  const payload = registry.createType('ExtrinsicPayload', signingPayload, {
    version: EXTRINSIC_VERSION,
  });
  const methodCall = registry.createType('Call', payload.method);
  const method = toTxMethod(registry, methodCall, toInt);

  return {
    blockHash: payload.blockHash.toHex(),
    eraPeriod: payload.era.asMortalEra.period.toNumber(),
    genesisHash: payload.genesisHash.toHex(),
    metadataRpc,
    method,
    nonce: payload.nonce.toNumber(),
    specVersion: payload.specVersion.toNumber(),
    tip: payload.tip.toNumber(),
    transactionVersion: payload.transactionVersion.toNumber(),
  };
}
