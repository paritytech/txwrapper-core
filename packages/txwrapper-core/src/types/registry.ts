import { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import { OverrideBundleType, RegistryTypes } from '@polkadot/types/types';

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
	 * Array of signedExtensions
	 */
	signedExtensions?: string[];
	/**
	 * User extensions used to inject into the type registry
	 */
	userExtensions?: ExtDef;
	/**
	 * OverrideTypesBundle to set to registry
	 */
	typesBundle?: OverrideBundleType;
	/**
	 * Additional types to register in the registry.
	 */
	additionalTypes?: RegistryTypes;
}
