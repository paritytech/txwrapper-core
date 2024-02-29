import {
	createSignedTx as signedTx,
	createSigningPayload as signingPayload,
	createSigningPayloadToU8a as signingPayloadToU8a,
	encodeUnsignedTransaction,
	getTxHash as txHash,
} from './construct';

export { decode } from './decode';
export { createMetadata, getRegistryBase } from './metadata';
export { defineMethod, toTxMethod } from './method';
export * from './util';
export { getSpecTypes } from '@polkadot/types-known';

export const construct = {
	signedTx,
	signingPayload,
	signingPayloadToU8a,
	encodeUnsignedTransaction,
	txHash,
};
