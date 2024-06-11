import { TxInfo } from '.';

export type DecodedUnsignedTx = TxInfo;

export type DecodedSigningPayload = Omit<
	TxInfo,
	'address' | 'blockNumber' | 'mode'
>;

export type DecodedSignedTx = Omit<
	TxInfo,
	| 'blockHash'
	| 'blockNumber'
	| 'genesisHash'
	| 'metadataHash'
	| 'mode'
	| 'specVersion'
	| 'transactionVersion'
	| 'version'
>;

/**
 * This Decode type is not included as a return type for the standard `txwrapper-core`
 * `decode` utility function. Instead this is specific to `decodeUnsignedHexTx`,
 * which is the counterpart to `encodeUnsignedTransaction`.
 */
export interface DecodedUnsignedHexTx {
	method: IMethod;
	version: number;
}

/**
 * Primitive version of `DecodeMethodInput` interface from polkadot-js.
 */
export interface IMethod {
	args: unknown;
	callIndex: string;
}
