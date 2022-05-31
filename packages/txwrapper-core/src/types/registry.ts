import { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';

import { ChainProperties } from './codec';

/**
 * Options for `getRegistry*` functions.
 */
export interface GetRegistryOptsCore {
	/**
	 * Runtime specName
	 */
	specName: string;
	/**
	 * chainName
	 */
	chainName: string;
	/**
	 * Runtime specVersion
	 */
	specVersion: number;
	/**
	 * SCALE encoded runtime metadata as a hex string
	 */
	metadataRpc: `0x${string}`;
	/**
	 * Chain ss58format, token decimals, and token ID
	 */
	properties?: ChainProperties;
	/**
	 * Used to reduce the metadata size by only having the calls
	 */
	asCallsOnlyArg?: boolean;
	/**
	 * Used to reduce the metadata size by only having specific inputted calls,
	 * and reducing the types to only whats needed to construct the transaction
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
