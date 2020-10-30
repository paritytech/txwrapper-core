/**
 * Types to re-export for users of your txwrapper lib.
 */
import { TypeRegistry } from '@polkadot/types';
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

/**
 * JSON format for information that is common to all transactions.
 */
export interface BaseTxInfo {
  /**
   * The ss-58 encoded address of the sending account.
   */
  address: string;
  /**
   * The checkpoint hash of the block, in hex.
   */
  blockHash: string;
  /**
   * The checkpoint block number (u32), in hex.
   */
  blockNumber: number;
  /**
   * Describe the longevity of a transaction. It represents the validity from
   * the `blockHash` field, in number of blocks. Defaults to 64 blocks.
   *
   * @default 64
   */
  eraPeriod?: number;
  /**
   * The genesis hash of the chain, in hex.
   */
  genesisHash: string;
  /**
   * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
   * call `state_getMetadata`.
   */
  metadataRpc: string;
  /**
   * The nonce for this transaction.
   */
  nonce: number;
  /**
   * The current spec version for the runtime.
   */
  specVersion: number;
  /**
   * The tip for this transaction, in hex.
   *
   * @default 0
   */
  tip?: number;
  /**
   * The current transaction version for the runtime.
   */
  transactionVersion: number;
}

/**
 * Runtime-specific options for encoding transactions. Pass these options to
 * functions that only require registry.
 */
export interface Options {
  /**
   * The type registry of the runtime.
   */
  registry: TypeRegistry;
}
