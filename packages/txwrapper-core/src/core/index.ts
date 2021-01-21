import {
	createSignedTx as signedTx,
	createSigningPayload as signingPayload,
	encodeUnsignedTransaction,
	getTxHash as txHash,
} from './construct';

export { decode } from './decode';
export { createMetadata, getRegistryBase } from './metadata';
export { defineMethod, toTxMethod } from './method';
export * from './util';
export { getSpecTypes } from '@polkadot/types-known';

/**
 * Functions for each step of the transaction construction process.
 */
export const construct = {
	signedTx,
	signingPayload,
	encodeUnsignedTransaction,
	txHash,
};
