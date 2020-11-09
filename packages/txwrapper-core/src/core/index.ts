import {
	createSignedTx as signedTx,
	createSigningPayload as signingPayload,
	encodeUnsignedTransaction,
	getTxHash as txHash,
} from './construct';

export { createMetadata, getRegistry } from './metadata';
export * from './util';
export { decode } from './decode';
export { defineMethod, toTxMethod } from './method';

/**
 * Functions for each step of the transaction construction process.
 */
export const construct = {
	signedTx,
	signingPayload,
	encodeUnsignedTransaction,
	txHash,
};
