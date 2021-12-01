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
	metadataRpc: string;
	/**
	 * Chain ss58format, token decimals, and token ID
	 */
	properties?: ChainProperties;
	/**
	 * Used to reduce the metadata size by only having the calls
	 */
	asCallsOnlyArg?: boolean;
}
