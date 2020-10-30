import { AnyJson } from '@polkadot/types/types';

import { BaseTxInfo, Options } from './types';

/**
 * Runtime-specific options for encoding/decoding transactions. Pass these
 * options to functions that require registry and metadata.
 */
export interface OptionsWithMeta extends Options {
  /**
   * The metadata of the runtime.
   */
  metadataRpc: string;
}

/**
 * Base Argument object for methods.
 */
export type Args = Record<string, AnyJson>;

/**
 * Complete information about a tx
 */
export interface TxInfo extends BaseTxInfo {
  method: TxMethod;
}

/**
 * Format used in txwrapper to represent a method.
 */
export interface TxMethod {
  args: Args;
  name: string;
  pallet: string;
}

/**
 * Complete information about a tx
 */
export interface TxInfo extends BaseTxInfo {
  method: TxMethod;
}
