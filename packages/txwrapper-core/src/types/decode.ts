import { TxInfo } from '.';

export type DecodedUnsignedTx = TxInfo;

export type DecodedSigningPayload = Omit<TxInfo, 'address' | 'blockNumber'>;

export type DecodedSignedTx = Omit<
	TxInfo,
	| 'blockHash'
	| 'blockNumber'
	| 'genesisHash'
	| 'specVersion'
	| 'transactionVersion'
	| 'version'
>;

/**
 * This Decode type is not included as a return type for the standard `txwrapper-core`
 * `decode` utility function. Instead this is specific to `decodeEncodedUnsignedTx`,
 * which is the counterpart to `encodeUnsignedTx`.
 */
export interface DecodedEncodedUnsignedTx {
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
