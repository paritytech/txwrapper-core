/**
 * JSON object of ChainProperties codec from `@polkadot/api`.
 */
export interface ChainProperties {
	ss58Format?: number;
	tokenDecimals?: number | number[];
	tokenSymbol?: string | string[];
}
