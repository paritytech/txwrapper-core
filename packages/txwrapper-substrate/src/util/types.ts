import { SignerPayloadJSON } from '@polkadot/types/types';

/**
 * JSON format for an unsigned transaction.
 */
export interface UnsignedTransaction extends SignerPayloadJSON {
    /**
     * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
     * call `state_getMetadata`.
     */
    metadataRpc: string;
}