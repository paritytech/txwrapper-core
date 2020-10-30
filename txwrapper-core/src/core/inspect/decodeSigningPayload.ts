/**
 * @ignore
 */ /** */
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';

import { DecodedSigningPayload, OptionsWithMeta } from '../../types'
import { core } from '../../core'

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

  registry.setMetadata(core.metadata.createMetadata(registry, metadataRpc));

  const payload = registry.createType('ExtrinsicPayload', signingPayload, {
    version: EXTRINSIC_VERSION,
  });
  const methodCall = registry.createType('Call', payload.method);
  const method = core.method.toTxMethod(registry, methodCall, toInt);

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
