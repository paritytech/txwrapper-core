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
