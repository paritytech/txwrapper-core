import { SignerPayloadJSON } from '@polkadot/types/types';

/**
 * JSON format for an unsigned transaction.
 */
export interface UnsignedTransaction extends SignerPayloadJSON {
    /**
     * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
     * call `state_getMetadata`.
     */
    metadataRpc: `0x${string}`;
}

/**
 * JSON object of ChainProperties codec from `@polkadot/api`.
 */
export interface ChainProperties {
    ss58Format?: number | null;
    tokenDecimals?: number[] | null;
    tokenSymbol?: string[] | null;
}
