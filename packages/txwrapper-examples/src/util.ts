/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/**
 * @ignore Don't show this file in documentation.
 */ /** */
import { KeyringPair } from '@polkadot/keyring/types';
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';
import { createMetadata, OptionsWithMeta } from '@substrate/txwrapper-polkadot';
import fetch from 'node-fetch';

/**
 * Send a JSONRPC request to the node at http://localhost:9933.
 *
 * @param method - The JSONRPC request method.
 * @param params - The JSONRPC request params.
 */
export function rpcToLocalNode(
	method: string,
	params: any[] = []
): Promise<any> {
	return fetch('http://localhost:9933', {
		body: JSON.stringify({
			id: 1,
			jsonrpc: '2.0',
			method,
			params,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
	})
		.then((response) => response.json())
		.then(({ error, result }) => {
			if (error) {
				throw new Error(
					`${error.code} ${error.message}: ${JSON.stringify(error.data)}`
				);
			}

			return result;
		});
}

/**
 * Signing function. Implement this on the OFFLINE signing device.
 *
 * @param pair - The signing pair.
 * @param signingPayload - Payload to sign.
 */
export function signWith(
	pair: KeyringPair,
	signingPayload: string,
	options: OptionsWithMeta
): string {
	const { registry, metadataRpc } = options;
	// Important! The registry needs to be updated with latest metadata, so make
	// sure to run `registry.setMetadata(metadata)` before signing.
	registry.setMetadata(createMetadata(registry, metadataRpc));

	const { signature } = registry
		.createType('ExtrinsicPayload', signingPayload, {
			version: EXTRINSIC_VERSION,
		})
		.sign(pair);

	return signature;
}
