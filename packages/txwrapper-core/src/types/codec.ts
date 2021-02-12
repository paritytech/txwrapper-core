/**
 * JSON object of ChainProperties codec from `@polkadot/api`.
 */
export interface ChainProperties {
	ss58Format?: number | null;
	tokenDecimals?: number[] | null;
	tokenSymbol?: string[] | null;
}
