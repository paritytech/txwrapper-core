import { TypeRegistry } from '@polkadot/types';
import { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import { AnyJson } from '@polkadot/types/types';
import { SignerPayloadJSON } from '@polkadot/types/types';

export { TypeRegistry } from '@polkadot/types';
export { SignerPayloadJSON } from '@polkadot/types/types';

/**
 * Runtime-specific options for encoding/decoding transactions. Pass these
 * options to functions that require registry and metadata.
 */
export interface OptionsWithMeta extends Options {
	/**
	 * The metadata of the runtime.
	 */
	metadataRpc: `0x${string}`;
	/**
	 * Used to reduce the metadata size by only having the calls
	 */
	asCallsOnlyArg?: boolean;
	/**
	 * Used to reduce the metadata size by only having specific inputted calls,
	 * and reducing the types to only whats needed to construct the transaction.
	 *
	 * An Array which contains all the pallets that should be included in the metadata
	 */
	asSpecifiedCallsOnlyV14?: string[];
	/**
	 * Array of signedExtensions
	 */
	signedExtensions?: string[];
	/**
	 * User extensions used to inject into the type registry
	 */
	userExtensions?: ExtDef;
}

/**
 * Base Argument object for methods.
 */
export type Args = Record<string, AnyJson>;

/**
 * Empty args.
 */
export type EmptyArgs = Record<string, never>;

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

/**
 * JSON format for an unsigned transaction.
 */
export interface UnsignedTransaction extends SignerPayloadJSON {
	/**
	 * The assetId used in ChargeAssetTxPayment
	 *
	 */
	assetId?: number | object;
	/**
	 * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
	 * call `state_getMetadata`.
	 */
	metadataRpc: `0x${string}`;
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
	 * The assetId used in ChargeAssetTxPayment
	 *
	 */
	assetId?: number | object;
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
	 * The merkleized metadata root, in hex.
	 */
	metadataHash?: string;
	/**
	 * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
	 * call `state_getMetadata`.
	 */
	metadataRpc: `0x${string}`;
	/**
	 * The mode for `CheckGenesisHash`.
	 */
	mode?: number;
	/**
	 * The nonce for this transaction.
	 */
	nonce: number;
	/**
	 * The current spec version of the runtime.
	 */
	specVersion: number;
	/**
	 * The tip for this transaction, in hex.
	 *
	 * @default 0
	 */
	tip?: number | string;
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
	/**
	 * Option to choose whether the constructed transaction will be immortal. If
	 * immortal the default value will be '0x00', and when decoded it will return 0.
	 * This option is used exclusively for unsigned transactions.
	 *
	 * Note: When creating an Immortal tx, the blockHash should be set as the genesis hash.
	 */
	isImmortalEra?: boolean;
}
